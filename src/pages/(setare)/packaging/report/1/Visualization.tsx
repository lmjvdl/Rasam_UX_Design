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
              label: 'خط 1',
              data: [
                {
                  x: 1671512235000,
                  y: 5,
                },
                {
                  x: 1671514219290,
                  y: 10,
                },
                {
                  x: 1671517802250,
                  y: 13,
                },
                {
                  x: 1671521402229,
                  y: 18,
                },
                {
                  x: 1671525002834,
                  y: 24,
                },
                {
                  x: 1671528603108,
                  y: 30,
                },
                {
                  x: 1671532202714,
                  y: 34,
                },
                {
                  x: 1671535801965,
                  y: 35,
                },
                {
                  x: 1671539402842,
                  y: 40,
                },
                {
                  x: 1671543002751,
                  y: 48,
                },
                {
                  x: 1671546603332,
                  y: 54,
                },
                {
                  x: 1671550203114,
                  y: 57,
                },
                {
                  x: 1671553803065,
                  y: 63,
                },
                {
                  x: 1671557402672,
                  y: 70,
                },
                {
                  x: 1671561004493,
                  y: 70,
                },
                {
                  x: 1671564603108,
                  y: 80,
                },
                {
                  x: 1671568203234,
                  y: 83,
                },
                {
                  x: 1671571803115,
                  y: 89,
                },
                {
                  x: 1671575402490,
                  y: 91,
                },
                {
                  x: 1671579002804,
                  y: 98,
                },
                {
                  x: 1671582600034,
                  y: 103,
                },
                {
                  x: 1671586203850,
                  y: 109,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235)',
              borderDash: [1, 5],
              pointStyle: 'circle',
              pointRadius: 2,
              pointHoverRadius: 5,
            },
            {
              label: 'خط 2',
              data: [
                {
                  x: 1671512236551,
                  y: 3,
                },
                {
                  x: 1671514212071,
                  y: 10,
                },
                {
                  x: 1671517800592,
                  y: 10,
                },
                {
                  x: 1671521400472,
                  y: 15,
                },
                {
                  x: 1671525001022,
                  y: 24,
                },
                {
                  x: 1671528601411,
                  y: 26,
                },
                {
                  x: 1671532200483,
                  y: 33,
                },
                {
                  x: 1671535800289,
                  y: 40,
                },
                {
                  x: 1671539401315,
                  y: 40,
                },
                {
                  x: 1671543001039,
                  y: 46,
                },
                {
                  x: 1671546601098,
                  y: 54,
                },
                {
                  x: 1671550201278,
                  y: 56,
                },
                {
                  x: 1671553800825,
                  y: 60,
                },
                {
                  x: 1671557400992,
                  y: 108,
                },
                {
                  x: 1671561001149,
                  y: 66,
                },
                {
                  x: 1671564601391,
                  y: 71,
                },
                {
                  x: 1671568201270,
                  y: 79,
                },
                {
                  x: 1671571801485,
                  y: 84,
                },
                {
                  x: 1671575400596,
                  y: 87,
                },
                {
                  x: 1671579001287,
                  y: 93,
                },
                {
                  x: 1671582601535,
                  y: 95,
                },
                {
                  x: 1671586200377,
                  y: 108,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132)',
              borderDash: [1, 5],
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
            title: {
              display: true,
              text: 'نمودار مدت توقف',
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
              display: true,
              title: {
                display: true,
                text: 'دقیقه',
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
