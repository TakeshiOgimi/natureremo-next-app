import {FC} from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false})

type Props = {
  illumination: number
  height?: number
}

const Illumination:FC<Props> = ({illumination, height}) => {
  const per = illumination / 255 * 100
  const options = {
    series: [per],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
            hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
      
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function() {
                return parseInt(illumination);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['明るさ'],
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="radialBar"
        height={height}
      />
    </div>
  )
}

Illumination.defaultProps = {
  height: 200
}

export default Illumination