import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function Visualization() {
  return (
    <div className='relative flex h-[70vh] items-center justify-center bg-transparent'>
      <Bar
        className='absolute top-0 h-full'
        data={{
          labels: ['خط 1', 'خط 2', 'خط 3', 'خط 4'],
          datasets: [
            {
              label: 'درجه 1',
              data: [10, 15, 25, 5],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'درجه 2',
              data: [15, 10, 20, 5],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'درجه 3',
              data: [25, 10, 35, 15],
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgb(75, 192, 192, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'درجه 4',
              data: [5, 10, 15, 45],
              borderColor: 'rgb(255, 159, 64)',
              backgroundColor: 'rgb(255, 159, 64, 0.5)',
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
              text: 'نمودار تولید روزانه',
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
                text: '3 دی ماه',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'تعداد',
              },
            },
          },
        }}
      />
    </div>
  )
}
