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
              label: 'پرس 1',
              data: [
                {
                  x: 1671654600000,
                  y: 350,
                },
                {
                  x: 1671683400000,
                  y: 670,
                },
                {
                  x: 1671712200000,
                  y: 250,
                },
                {
                  x: 1671741000000,
                  y: 400,
                },
                {
                  x: 1671769800000,
                  y: 120,
                },
                {
                  x: 1671798600000,
                  y: 350,
                },
                {
                  x: 1671827400000,
                  y: 450,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'پرس 8',
              data: [
                {
                  x: 1671654600000,
                  y: 350,
                },
                {
                  x: 1671683400000,
                  y: 250,
                },
                {
                  x: 1671712200000,
                  y: 430,
                },
                {
                  x: 1671741000000,
                  y: 370,
                },
                {
                  x: 1671769800000,
                  y: 110,
                },
                {
                  x: 1671798600000,
                  y: 190,
                },
                {
                  x: 1671827400000,
                  y: 550,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'پرس 9',
              data: [
                {
                  x: 1671654600000,
                  y: 520,
                },
                {
                  x: 1671683400000,
                  y: 280,
                },
                {
                  x: 1671712200000,
                  y: 490,
                },
                {
                  x: 1671741000000,
                  y: 370,
                },
                {
                  x: 1671769800000,
                  y: 310,
                },
                {
                  x: 1671798600000,
                  y: 130,
                },
                {
                  x: 1671827400000,
                  y: 140,
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
              text: 'میزان خاک ورودی پرس',
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
              suggestedMax: 800,
              display: true,
              beginAtZero: true,
              title: {
                display: true,
                text: 'وزن خاک (کیلوگرم)',
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
