import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Visualization() {
  return (
    <div className='relative flex h-[70vh] items-center justify-center bg-transparent'>
      <Line
        className='absolute top-0 h-full'
        data={{
          datasets: [
            {
              label: 'خاک فلدسپات',
              data: [
                {
                  x: 1674292596000,
                  y: 2500,
                },
                {
                  x: 1674378996000,
                  y: 2700,
                },
                {
                  x: 1674465396000,
                  y: 500,
                },
                {
                  x: 1674551796000,
                  y: 500,
                },
                {
                  x: 1674638196000,
                  y: 8400,
                },
                {
                  x: 1674724596000,
                  y: 6800,
                },
                {
                  x: 1674810996000,
                  y: 2700,
                },
                {
                  x: 1674897396000,
                  y: 4300,
                },
                {
                  x: 1674983796000,
                  y: 8300,
                },
                {
                  x: 1675070196000,
                  y: 5400,
                },
                {
                  x: 1675156596000,
                  y: 5400,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235)',
              pointStyle: 'circle',
              pointRadius: 2,
              pointHoverRadius: 5,
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
            line: {
              pointRadius: 0,
              borderWidth: 2,
              fill: false,
            },
          },
          interaction: {
            intersect: false,
            mode: 'nearest',
          },
          plugins: {
            decimation: {
              enabled: true,
              algorithm: 'lttb',
              threshold: 720,
            },

            datalabels: { display: false },

            title: {
              display: true,
              text: 'نمودار موجودی خاک',
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
                color: '#000',
              },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                color: '#000',
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
              beginAtZero: true,
              display: true,
              title: {
                display: true,
                text: 'وزن (کیلوگرم)',
                color: '#000',
              },
              ticks: {
                align: 'center',
                color: '#000',
              },
            },
          },
        }}
      />
    </div>
  )
}
