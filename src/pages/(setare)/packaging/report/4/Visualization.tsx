import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function Visualization() {
  return (
    <div className='relative flex h-[70vh] items-center justify-center bg-transparent'>
      <Bar
        className='absolute top-0 h-full'
        data={{
          labels: ['خطا 1', 'خطا 2', 'خطا 3', 'خطا 4'],
          datasets: [
            {
              label: 'خط 1',
              data: [10, 15, 25, 5],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'خط21',
              data: [15, 25, 5, 10],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'خط 3',
              data: [25, 5, 10, 15],
              borderColor: 'rgb(255, 159, 64)',
              backgroundColor: 'rgb(255, 159, 64, 0.5)',
              borderWidth: 2,
            },
          ],
        }}
        options={{
          indexAxis: 'y',
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
              text: 'نمودار خطا و توقف',
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
              display: true,
              title: {
                display: true,
                text: 'مدت زمان خطا (دقیقه)',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'نوع خطا',
              },
            },
          },
        }}
      />
    </div>
  )
}
