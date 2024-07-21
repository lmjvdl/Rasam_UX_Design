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
                  x: 1674162000000,
                  y: 0,
                },
                {
                  x: 1674248400000,
                  y: 2.5,
                },
                {
                  x: 1674330480000,
                  y: 2.7,
                },
                {
                  x: 1674416880000,
                  y: 0.5,
                },
                {
                  x: 1674503280000,
                  y: 0.5,
                },
                {
                  x: 1674589680000,
                  y: 8.4,
                },
                {
                  x: 1674676080000,
                  y: 6.8,
                },
                {
                  x: 1674762480000,
                  y: 2.7,
                },
                {
                  x: 1674848880000,
                  y: 4.3,
                },
                {
                  x: 1674935280000,
                  y: 8.3,
                },
                {
                  x: 1675021680000,
                  y: 5.4,
                },
                {
                  x: 1675108080000,
                  y: 5.4,
                },
                {
                  x: 1675194480000,
                  y: 0.0,
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
                  x: 1674162000000,
                  y: 0,
                },
                {
                  x: 1674248400000,
                  y: 2.6,
                },
                {
                  x: 1674330480000,
                  y: 2.6,
                },
                {
                  x: 1674416880000,
                  y: 0.4,
                },
                {
                  x: 1674503280000,
                  y: 0.3,
                },
                {
                  x: 1674589680000,
                  y: 7.4,
                },
                {
                  x: 1674676080000,
                  y: 8.8,
                },
                {
                  x: 1674762480000,
                  y: 3.7,
                },
                {
                  x: 1674848880000,
                  y: 4.5,
                },
                {
                  x: 1674935280000,
                  y: 0.3,
                },
                {
                  x: 1675021680000,
                  y: 2.4,
                },
                {
                  x: 1675108080000,
                  y: 0.4,
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
              text: 'مدت زمان چرخش بالمیل در پیک برق',
            },
            datalabels: { display: false },
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
