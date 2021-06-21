import {FC, useEffect, useState} from 'react'

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
  const [statusList, setStateList] = useState([])
  useEffect(() => {
    // APIの情報を整形
    // TODO: newest_eventsは後で定義する
    const newestEvents = status[0]?.newest_events || {}
    const humidity = newestEvents?.hu?.val || 0
    const illumination = newestEvents?.il?.val || 0
    const movement = newestEvents?.mo?.val || 0
    const temperature = newestEvents?.te?.val || 0
    const newStatus = {humidity, illumination, movement, temperature}

    // 最新情報を30件分の情報のみ登録する
    const newStatusList = statusList
    newStatusList.push(newStatus)
    if(newStatusList.length > 30) newStatusList.pop()
    setStateList(newStatusList)
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

  // console.log('state:', state)
  return (
    <div>
      <p>{count} sec</p>
      <p>{statusList.length}</p>
      <p>{JSON.stringify(statusList)}</p>
    </div>
  )
}

export default Roomstate