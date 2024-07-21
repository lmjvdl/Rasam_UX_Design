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
              label: 'بالمیل بچ 1',
              data: [
                {
                  x: 1674162000000,
                  y: 0,
                },
                {
                  x: 1674248400000,
                  y: 250,
                },
                {
                  x: 1674330480000,
                  y: 270,
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
                  y: 840,
                },
                {
                  x: 1674676080000,
                  y: 680,
                },
                {
                  x: 1674762480000,
                  y: 270,
                },
                {
                  x: 1674848880000,
                  y: 430,
                },
                {
                  x: 1674935280000,
                  y: 830,
                },
                {
                  x: 1675021680000,
                  y: 540,
                },
                {
                  x: 1675108080000,
                  y: 540,
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
              label: 'بالمیل بچ 2',
              data: [
                {
                  x: 1674162000000,
                  y: 0,
                },
                {
                  x: 1674248400000,
                  y: 260,
                },
                {
                  x: 1674330480000,
                  y: 260,
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
                  y: 740,
                },
                {
                  x: 1674676080000,
                  y: 880,
                },
                {
                  x: 1674762480000,
                  y: 370,
                },
                {
                  x: 1674848880000,
                  y: 450,
                },
                {
                  x: 1674935280000,
                  y: 300,
                },
                {
                  x: 1675021680000,
                  y: 240,
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
              text: 'گزارش مصرف مواد در بالمیل',
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
              suggestedMax: 1000,
              display: true,
              beginAtZero: true,
              title: {
                display: true,
                text: 'میزان مصرف آب (لیتر)',
              },
              ticks: {},
            },
          },
        }}
      />
    </div>
  )
}
