import React from 'react'
import { Line } from 'react-chartjs-2'

const data1: { x: number; y: number }[] = []
const data2: { x: number; y: number }[] = []
let prev1 = 40
let prev2 = 30
const now = 1674534600000

for (let i = 0; i < 1440; i++) {
  prev1 += 5 - Math.random() * 10
  if (prev1 < 0) prev1 = Math.random() * 10
  data1.push({ x: now + i * 60000, y: prev1 })

  prev2 += 5 - Math.random() * 10
  if (prev2 < 0) prev2 = Math.random() * 10
  data2.push({ x: now + i * 60000, y: prev2 })
}

export default function Visualization() {
  return (
    <div className='relative flex h-[70vh] items-center justify-center bg-transparent'>
      <Line
        className='absolute top-0 h-full'
        data={{
          datasets: [
            {
              label: 'موتور 1',
              data: data1,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235)',
            },
            {
              label: 'موتور 2',
              data: data2,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132)',
            },
          ],
        }}
        options={{
          locale: 'fa-IR',
          parsing: false,
          spanGaps: false,
          animation: false,
          responsive: true,
          normalized: true,
          maintainAspectRatio: false,
          datasets: {
            line: { pointRadius: 0, borderWidth: 2, fill: false },
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
              text: 'میزان جریان های مصرفی موتور های برش',
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
                text: 'جریان مصرفی (آمپر)',
              },
              ticks: {
                align: 'center',
              },
            },
          },
        }}
      />
    </div>
  )
}
