import {FC, useEffect, useState} from 'react'
/**
 * 下記コメントアウトのインポートを使うと window is not defined で怒られるので
 * 下記URLに記載がある dynamic Import で解決
 * https://zenn.dev/ninomium/articles/5fed8af69640a6
 */
// import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false})

const Roomstate:FC = () => {
  // 最新室温情報を取得
  const [status, setStatus] = useState({})

  useEffect(() => {
    const apiCallIntervalId = setInterval(() => {
      fetch('https://api.nature.global/1/devices', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer wQPhjMPVlFwLaCzRdlVmmo0Z7Mjw-oJVM0hs_a0MpCU.mVB43m2sogf_T5w6kFEDgK5-Huo2NWxrCD70nKa2iDk'
        }
      })
      .then(r => r.json())
      .then(j => setStatus(j))
      .catch(e => {
        console.error('Error', e)
      })
    }, 10000)
    return () => {
      clearInterval(apiCallIntervalId)
    }
  },[])

  // グラフ用の情報を更新(最新30件分のデータを保持するように調整する処理をする)
  const [statusList, setStatusList] = useState([])
  const [chartOption, setChartOption] = useState({option: {}, series: []});
  useEffect(() => {
    // APIの情報を整形
    // TODO: newest_eventsは後で定義する
    const newestEvents = status[0]?.newest_events || {}
    const datetime = Date.now()
    const humidity = newestEvents?.hu?.val || 0
    const illumination = newestEvents?.il?.val || 0
    const movement = newestEvents?.mo?.val || 0
    const temperature = newestEvents?.te?.val || 0
    const newStatus = {datetime, humidity, illumination, movement, temperature}

    // 最新情報を30件分の情報のみ登録する
    const newStatusList = statusList
    newStatusList.push(newStatus)
    if(newStatusList.length > 30) newStatusList.shift()
    setStatusList(newStatusList)

    // 以下の処理は分けるべき？
    // 実行時間をリストを生成
    const datetimeList = newStatusList.map(v => v?.datetime || Date.now())
    // 室温のリストを生成
    const temperatureList = newStatusList.map(v => v?.temperature || 0)
    // 湿度
    const humidityList = newStatusList.map(v => v?.humidity || 0)
    const newOption = {
      options: {
        chart: {
          height: '320',
          width: '500',
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: datetimeList
        },
        yaxis:[
          {
            title: {
              text: '温度',
            },
          },
          {
            opposite: true,
            title: {
              text: '湿度',
            },
          },
        ],
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
      series:[
        {
          name: 'Temperature',
          type: 'area',
          data: temperatureList
        },
        {
          name: 'humidity',
          type: 'line',
          data: humidityList
        }
      ]
    }
    setChartOption(newOption)
  }, [status])
  
  const [count, setCount] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => {
        const res = count + 1
        return res
      })
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <p>{count} sec</p>
      <p>{JSON.stringify(statusList)}</p>
      <div>
        <ReactApexChart options={chartOption?.options || {}} series={chartOption?.series || []}/>
      </div>
    </div>
  )
}

export default Roomstate