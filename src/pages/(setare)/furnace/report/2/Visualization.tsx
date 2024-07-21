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
              label: 'سوبلکس 1',
              data: [
                {
                  x: 1671481800000,
                  y: 500,
                },
                {
                  x: 1671485400000,
                  y: 510,
                },
                {
                  x: 1671489000000,
                  y: 530,
                },
                {
                  x: 1671492600000,
                  y: 540,
                },
                {
                  x: 1671496200000,
                  y: 700,
                },
                {
                  x: 1671499800000,
                  y: 720,
                },
                {
                  x: 1671503400000,
                  y: 760,
                },
                {
                  x: 1671507000000,
                  y: 650,
                },
                {
                  x: 1671510600000,
                  y: 630,
                },
                {
                  x: 1671514200000,
                  y: 600,
                },
                {
                  x: 1671517800000,
                  y: 600,
                },
                {
                  x: 1671521400000,
                  y: 600,
                },
                {
                  x: 1671525000000,
                  y: 600,
                },
                {
                  x: 1671528600000,
                  y: 620,
                },
                {
                  x: 1671532200000,
                  y: 590,
                },
                {
                  x: 1671535800000,
                  y: 580,
                },
                {
                  x: 1671539400000,
                  y: 630,
                },
                {
                  x: 1671543000000,
                  y: 600,
                },
                {
                  x: 1671546600000,
                  y: 600,
                },
                {
                  x: 1671550200000,
                  y: 600,
                },
                {
                  x: 1671553800000,
                  y: 600,
                },
                {
                  x: 1671557400000,
                  y: 610,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235)',
              pointStyle: 'circle',
              pointRadius: 2,
              pointHoverRadius: 5,
            },
            {
              label: 'سوبلکس 2',
              data: [
                {
                  x: 1671481800000,
                  y: 870,
                },
                {
                  x: 1671485400000,
                  y: 860,
                },
                {
                  x: 1671489000000,
                  y: 760,
                },
                {
                  x: 1671492600000,
                  y: 890,
                },
                {
                  x: 1671496200000,
                  y: 650,
                },
                {
                  x: 1671499800000,
                  y: 600,
                },
                {
                  x: 1671503400000,
                  y: 360,
                },
                {
                  x: 1671507000000,
                  y: 340,
                },
                {
                  x: 1671510600000,
                  y: 650,
                },
                {
                  x: 1671514200000,
                  y: 670,
                },
                {
                  x: 1671517800000,
                  y: 680,
                },
                {
                  x: 1671521400000,
                  y: 590,
                },
                {
                  x: 1671525000000,
                  y: 510,
                },
                {
                  x: 1671528600000,
                  y: 500,
                },
                {
                  x: 1671532200000,
                  y: 520,
                },
                {
                  x: 1671535800000,
                  y: 500,
                },
                {
                  x: 1671539400000,
                  y: 500,
                },
                {
                  x: 1671543000000,
                  y: 500,
                },
                {
                  x: 1671546600000,
                  y: 500,
                },
                {
                  x: 1671550200000,
                  y: 500,
                },
                {
                  x: 1671553800000,
                  y: 500,
                },
                {
                  x: 1671557400000,
                  y: 500,
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
              text: 'گزارش موجودی دوبلکس',
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
              suggestedMax: 1000,
              title: {
                display: true,
                text: 'تعداد',
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
