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
              label: 'پالت 1',
              data: [
                {
                  x: 1671481800000,
                  y: 350,
                },
                {
                  x: 1671510600000,
                  y: 280,
                },
                {
                  x: 1671539400000,
                  y: 120,
                },
                {
                  x: 1671568200000,
                  y: 320,
                },
                {
                  x: 1671597000000,
                  y: 385,
                },
                {
                  x: 1671625800000,
                  y: 280,
                },
                {
                  x: 1671654600000,
                  y: 175,
                },
                {
                  x: 1671683400000,
                  y: 435,
                },
                {
                  x: 1671712200000,
                  y: 475,
                },
                {
                  x: 1671741000000,
                  y: 200,
                },
                {
                  x: 1671769800000,
                  y: 60,
                },
                {
                  x: 1671798600000,
                  y: 275,
                },
                {
                  x: 1671827400000,
                  y: 225,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'پالت 2',
              data: [
                {
                  x: 1671481800000,
                  y: 475,
                },
                {
                  x: 1671510600000,
                  y: 375,
                },
                {
                  x: 1671539400000,
                  y: 175,
                },
                {
                  x: 1671568200000,
                  y: 75,
                },
                {
                  x: 1671597000000,
                  y: 325,
                },
                {
                  x: 1671625800000,
                  y: 225,
                },
                {
                  x: 1671654600000,
                  y: 425,
                },
                {
                  x: 1671683400000,
                  y: 125,
                },
                {
                  x: 1671712200000,
                  y: 365,
                },
                {
                  x: 1671741000000,
                  y: 185,
                },
                {
                  x: 1671769800000,
                  y: 455,
                },
                {
                  x: 1671798600000,
                  y: 95,
                },
                {
                  x: 1671827400000,
                  y: 275,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'پالت 3',
              data: [
                {
                  x: 1671481800000,
                  y: 365,
                },
                {
                  x: 1671510600000,
                  y: 185,
                },
                {
                  x: 1671539400000,
                  y: 455,
                },
                {
                  x: 1671568200000,
                  y: 95,
                },
                {
                  x: 1671597000000,
                  y: 320,
                },
                {
                  x: 1671625800000,
                  y: 230,
                },
                {
                  x: 1671654600000,
                  y: 410,
                },
                {
                  x: 1671683400000,
                  y: 140,
                },
                {
                  x: 1671712200000,
                  y: 395,
                },
                {
                  x: 1671741000000,
                  y: 480,
                },
                {
                  x: 1671769800000,
                  y: 155,
                },
                {
                  x: 1671798600000,
                  y: 65,
                },
                {
                  x: 1671827400000,
                  y: 320,
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
              text: 'متراژ پالت گیری',
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
                text: 'متراژ تولیدی (متر مربع)',
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
