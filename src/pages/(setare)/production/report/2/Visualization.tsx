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
                  x: 1671481800000,
                  y: 84,
                },
                {
                  x: 1671485400000,
                  y: 65,
                },
                {
                  x: 1671489000000,
                  y: 75,
                },
                {
                  x: 1671492600000,
                  y: 85,
                },
                {
                  x: 1671496200000,
                  y: 74,
                },
                {
                  x: 1671499800000,
                  y: 96,
                },
                {
                  x: 1671503400000,
                  y: 64,
                },
                {
                  x: 1671507000000,
                  y: 76,
                },
                {
                  x: 1671510600000,
                  y: 84,
                },
                {
                  x: 1671514200000,
                  y: 79,
                },
                {
                  x: 1671517800000,
                  y: 65,
                },
                {
                  x: 1671521400000,
                  y: 75,
                },
                {
                  x: 1671525000000,
                  y: 64,
                },
                {
                  x: 1671528600000,
                  y: 73,
                },
                {
                  x: 1671532200000,
                  y: 91,
                },
                {
                  x: 1671535800000,
                  y: 82,
                },
                {
                  x: 1671539400000,
                  y: 46,
                },
                {
                  x: 1671543000000,
                  y: 64,
                },
                {
                  x: 1671546600000,
                  y: 37,
                },
                {
                  x: 1671550200000,
                  y: 73,
                },
                {
                  x: 1671553800000,
                  y: 45,
                },
                {
                  x: 1671557400000,
                  y: 45,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235)',
              pointStyle: 'circle',
              pointRadius: 2,
              pointHoverRadius: 5,
            },
            {
              label: 'خط 2',
              data: [
                {
                  x: 1671481800000,
                  y: 76,
                },
                {
                  x: 1671485400000,
                  y: 67,
                },
                {
                  x: 1671489000000,
                  y: 94,
                },
                {
                  x: 1671492600000,
                  y: 49,
                },
                {
                  x: 1671496200000,
                  y: 85,
                },
                {
                  x: 1671499800000,
                  y: 58,
                },
                {
                  x: 1671503400000,
                  y: 57,
                },
                {
                  x: 1671507000000,
                  y: 75,
                },
                {
                  x: 1671510600000,
                  y: 84,
                },
                {
                  x: 1671514200000,
                  y: 48,
                },
                {
                  x: 1671517800000,
                  y: 35,
                },
                {
                  x: 1671521400000,
                  y: 53,
                },
                {
                  x: 1671525000000,
                  y: 64,
                },
                {
                  x: 1671528600000,
                  y: 51,
                },
                {
                  x: 1671532200000,
                  y: 25,
                },
                {
                  x: 1671535800000,
                  y: 52,
                },
                {
                  x: 1671539400000,
                  y: 64,
                },
                {
                  x: 1671543000000,
                  y: 46,
                },
                {
                  x: 1671546600000,
                  y: 73,
                },
                {
                  x: 1671550200000,
                  y: 91,
                },
                {
                  x: 1671553800000,
                  y: 37,
                },
                {
                  x: 1671557400000,
                  y: 37,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132)',
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
              text: 'سرعت خط کاشی',
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
              suggestedMin: 0,
              suggestedMax: 100,
              title: {
                display: true,
                text: 'تعداد در دقیقه',
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
