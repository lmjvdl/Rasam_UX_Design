import React from 'react'
import { Line } from 'react-chartjs-2'

const oneToSixArr = Array.from({ length: 6 }, (_, i) => i + 1)

export default function Live() {
  return (
    <div>
      <section className='flex flex-wrap items-stretch justify-center'>
        {oneToSixArr.map(number => (
          <ChartContainer key={number} number={number} />
        ))}
      </section>
    </div>
  )
}

function ChartContainer({ number }: { number: number }) {
  const options = React.useMemo(() => generateOptions(number), [])
  const [data, setData] = React.useState(generate())
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setData(updateArray)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%]'>
      <div className='flex flex-col items-center gap-3 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        <div className='relative flex h-96 w-full items-center justify-center bg-transparent'>
          <Line
            className='absolute top-0 h-full'
            data={{
              datasets: [
                {
                  data: data,
                  borderColor: chartColors[number - 1],
                },
              ],
            }}
            options={options}
          />
        </div>
      </div>
    </div>
  )
}

const chartColors = [
  '#3b82f6',
  '#f43f5e',
  '#059669',
  '#fb923c',
  '#9333ea',
  '#eab308',
]
const thirtyMinutes = 30 * 60 * 1000
const thirtyMinutesInSeconds = 30 * 60
const oneSecond = 1000
const thirtyMinutesBefore = Date.now() - thirtyMinutes

function generate(start: number = 40) {
  const data: { x: number; y: number }[] = []
  for (let i = 0; i < thirtyMinutesInSeconds; i++) {
    start += 5 - Math.random() * 10
    if (start < 0) start = Math.random() * 10
    data.push({ x: thirtyMinutesBefore + i * oneSecond, y: start })
  }
  return data
}

function updateArray(arr: { x: number; y: number }[]) {
  const lastTime = arr[arr.length - 1].x
  const lastData = arr[arr.length - 1].y
  const newTime = lastTime + oneSecond
  const newData =
    lastData < 0 ? Math.random() * 10 : lastData + 5 - Math.random() * 10
  const newArray = arr.slice()

  newArray.shift()
  newArray.push({
    x: newTime,
    y: newData,
  })

  return newArray
}

function generateOptions(number: number) {
  return {
    locale: 'fa-IR',
    parsing: false,
    spanGaps: false,
    animation: false,
    responsive: true,
    normalized: true,
    maintainAspectRatio: false,
    datasets: {
      line: { pointRadius: 0, borderWidth: 1, fill: false },
    },
    elements: { point: { radius: 0 } },
    interaction: {
      intersect: false,
      mode: 'nearest',
    },
    plugins: {
      decimation: {
        enabled: true,
        algorithm: 'lttb',
        // samples: 720,
        threshold: 720,
      },
      title: {
        display: true,
        text: 'نمودار شماره ' + number,
      },
      datalabels: { display: false },
      legend: { display: false },
    },
    scales: {
      x: {
        type: 'time',
        display: true,
        title: {
          display: true,
          text: 'تاریخ',
        },
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          major: {
            enabled: true,
          },
        },
        adapters: {
          date: {
            locale: 'fa-IR',
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'آمپر',
        },
        ticks: {
          align: 'center',
        },
      },
    },
  } as const
}
