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
              label: 'بالمیل 1',
              data: [
                {
                  x: 1671481800000,
                  y: 6.48,
                },
                {
                  x: 1671510600000,
                  y: 4.44,
                },
                {
                  x: 1671539400000,
                  y: 6.35,
                },
                {
                  x: 1671568200000,
                  y: 6.3,
                },
                {
                  x: 1671597000000,
                  y: 6.38,
                },
                {
                  x: 1671625800000,
                  y: 1.84,
                },
                {
                  x: 1671654600000,
                  y: 6.91,
                },
                {
                  x: 1671683400000,
                  y: 6.56,
                },
                {
                  x: 1671712200000,
                  y: 6.11,
                },
                {
                  x: 1671741000000,
                  y: 6.54,
                },
                {
                  x: 1671769800000,
                  y: 6.73,
                },
                {
                  x: 1671798600000,
                  y: 2.76,
                },
                {
                  x: 1671827400000,
                  y: 7.11,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'بالمیل 2',
              data: [
                {
                  x: 1671481800000,
                  y: 6.31,
                },
                {
                  x: 1671510600000,
                  y: 4.41,
                },
                {
                  x: 1671539400000,
                  y: 7.59,
                },
                {
                  x: 1671568200000,
                  y: 6.59,
                },
                {
                  x: 1671597000000,
                  y: 5.71,
                },
                {
                  x: 1671625800000,
                  y: 7.09,
                },
                {
                  x: 1671654600000,
                  y: 4.55,
                },
                {
                  x: 1671683400000,
                  y: 2.91,
                },
                {
                  x: 1671712200000,
                  y: 4.89,
                },
                {
                  x: 1671741000000,
                  y: 4.56,
                },
                {
                  x: 1671769800000,
                  y: 4.92,
                },
                {
                  x: 1671798600000,
                  y: 5.46,
                },
                {
                  x: 1671827400000,
                  y: 5.78,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'بالمیل 3',
              data: [
                {
                  x: 1671481800000,
                  y: 6.91,
                },
                {
                  x: 1671510600000,
                  y: 6.56,
                },
                {
                  x: 1671539400000,
                  y: 6.11,
                },
                {
                  x: 1671568200000,
                  y: 5.45,
                },
                {
                  x: 1671597000000,
                  y: 6.73,
                },
                {
                  x: 1671625800000,
                  y: 3.79,
                },
                {
                  x: 1671654600000,
                  y: 4.89,
                },
                {
                  x: 1671683400000,
                  y: 5.67,
                },
                {
                  x: 1671712200000,
                  y: 6.34,
                },
                {
                  x: 1671741000000,
                  y: 6.43,
                },
                {
                  x: 1671769800000,
                  y: 7.15,
                },
                {
                  x: 1671798600000,
                  y: 6.15,
                },
                {
                  x: 1671827400000,
                  y: 4.75,
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
              text: 'مدت زمان چرخش بالمیل',
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
                text: 'ساعت',
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
