import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function Visualization() {
  return (
    <div className='relative flex h-[70vh] items-center justify-center bg-transparent'>
      <Bar
        className='absolute top-0 h-full'
        data={{
          datasets: [
            {
              label: 'دستگاه 1',
              data: [
                {
                  x: 1671654600000,
                  y: 102,
                },
                {
                  x: 1671683400000,
                  y: 67,
                },
                {
                  x: 1671712200000,
                  y: 76,
                },
                {
                  x: 1671741000000,
                  y: 95,
                },
                {
                  x: 1671769800000,
                  y: 59,
                },
                {
                  x: 1671798600000,
                  y: 75,
                },
                {
                  x: 1671827400000,
                  y: 95,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'دستگاه 2',
              data: [
                {
                  x: 1671654600000,
                  y: 85,
                },
                {
                  x: 1671683400000,
                  y: 65,
                },
                {
                  x: 1671712200000,
                  y: 45,
                },
                {
                  x: 1671741000000,
                  y: 75,
                },
                {
                  x: 1671769800000,
                  y: 76,
                },
                {
                  x: 1671798600000,
                  y: 84,
                },
                {
                  x: 1671827400000,
                  y: 94,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'دستگاه 3',
              data: [
                {
                  x: 1671654600000,
                  y: 73,
                },
                {
                  x: 1671683400000,
                  y: 95,
                },
                {
                  x: 1671712200000,
                  y: 100,
                },
                {
                  x: 1671741000000,
                  y: 69,
                },
                {
                  x: 1671769800000,
                  y: 72,
                },
                {
                  x: 1671798600000,
                  y: 81,
                },
                {
                  x: 1671827400000,
                  y: 98,
                },
              ],
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgb(75, 192, 192, 0.5)',
              borderWidth: 2,
            },
          ],
        }}
        options={{
          indexAxis: 'x',
          locale: 'fa-IR',
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            intersect: true,
            mode: 'nearest',
          },
          plugins: {
            title: {
              display: true,
              text: 'آمار ضایعات برش',
            },
            datalabels: {
              display: false,
            },
            zoom: {
              pan: {
                enabled: true,
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                drag: {
                  enabled: true,
                  modifierKey: 'ctrl',
                },
                mode: 'xy',
                overScaleMode: 'y',
              },
            },
          },
          scales: {
            x: {
              type: 'time',
              display: true,

              title: {
                display: true,
                text: 'شیفت',
              },
              ticks: {
                minRotation: 15,
                maxTicksLimit: 18,
                maxRotation: 90,
                callback(_, index, ticks) {
                  const formatted = formatter(ticks[index].value)
                  return formatted
                },
                source: 'data',
                align: 'center',
              },
            },
            y: {
              display: true,
              beginAtZero: true,
              title: {
                display: true,
                text: 'میزان ضایعات (متر مربع)',
              },
              ticks: {},
            },
          },
        }}
      />
    </div>
  )
}

const persianDate = new Intl.DateTimeFormat('fa-IR', {
  month: 'short',
  day: 'numeric',
})
const shifts = {
  0: 'صبح',
  8: 'ظهر',
  16: 'شب',
}
function formatter(timestamp: number) {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const shift = shifts[`${hour}`]
  const dateString = persianDate.format(date)

  return `${dateString} شیفت ${shift}`
}
