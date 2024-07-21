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
              label: 'سیلو 1',
              data: [
                {
                  x: 1674162000000,
                  y: 0,
                },
                {
                  x: 1674248400000,
                  y: 2500,
                },
                {
                  x: 1674330480000,
                  y: 2700,
                },
                {
                  x: 1674416880000,
                  y: 500,
                },
                {
                  x: 1674503280000,
                  y: 500,
                },
                {
                  x: 1674589680000,
                  y: 8400,
                },
                {
                  x: 1674676080000,
                  y: 6800,
                },
                {
                  x: 1674762480000,
                  y: 2700,
                },
                {
                  x: 1674848880000,
                  y: 4300,
                },
                {
                  x: 1674935280000,
                  y: 8300,
                },
                {
                  x: 1675021680000,
                  y: 5400,
                },
                {
                  x: 1675108080000,
                  y: 5400,
                },
                {
                  x: 1675194480000,
                  y: 0,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'سیلو 2',
              data: [
                {
                  x: 1674162000000,
                  y: 0,
                },
                {
                  x: 1674248400000,
                  y: 2600,
                },
                {
                  x: 1674330480000,
                  y: 2600,
                },
                {
                  x: 1674416880000,
                  y: 400,
                },
                {
                  x: 1674503280000,
                  y: 300,
                },
                {
                  x: 1674589680000,
                  y: 7400,
                },
                {
                  x: 1674676080000,
                  y: 8800,
                },
                {
                  x: 1674762480000,
                  y: 3700,
                },
                {
                  x: 1674848880000,
                  y: 4500,
                },
                {
                  x: 1674935280000,
                  y: 300,
                },
                {
                  x: 1675021680000,
                  y: 2400,
                },
                {
                  x: 1675108080000,
                  y: 400,
                },
                {
                  x: 1675194480000,
                  y: 0,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
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
              text: 'وزن خاک در سیلو های خروجی سنگ شکن',
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
              time: {
                unit: 'day',
              },
              display: true,

              title: {
                display: true,
                text: 'تاریخ',
              },
            },
            y: {
              display: true,
              beginAtZero: true,
              title: {
                display: true,
                text: 'وزن (کیلوگرم)',
              },
              ticks: {},
            },
          },
        }}
      />
    </div>
  )
}
