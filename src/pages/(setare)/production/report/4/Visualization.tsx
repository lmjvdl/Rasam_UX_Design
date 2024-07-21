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
              label: 'ضایعات پرس',
              data: [
                {
                  x: 1671654600000,
                  y: 4500,
                },
                {
                  x: 1671683400000,
                  y: 3000,
                },
                {
                  x: 1671712200000,
                  y: 2800,
                },
              ],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'ضایعات درایر',
              data: [
                {
                  x: 1671654600000,
                  y: 4800,
                },
                {
                  x: 1671683400000,
                  y: 3200,
                },
                {
                  x: 1671712200000,
                  y: 2500,
                },
              ],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'ضایعات ورودی کوره',
              data: [
                {
                  x: 1671654600000,
                  y: 3600,
                },
                {
                  x: 1671683400000,
                  y: 3800,
                },
                {
                  x: 1671712200000,
                  y: 1200,
                },
              ],
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgb(75, 192, 192, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'ضایعات کوره',
              data: [
                {
                  x: 1671654600000,
                  y: 3300,
                },
                {
                  x: 1671683400000,
                  y: 3000,
                },
                {
                  x: 1671712200000,
                  y: 1400,
                },
              ],
              borderColor: 'rgb(255, 159, 64)',
              backgroundColor: 'rgba(255, 159, 64,0.5)',
              borderWidth: 2,
            },
            {
              label: 'ضایعات خروجی کوره',
              data: [
                {
                  x: 1671654600000,
                  y: 3520,
                },
                {
                  x: 1671683400000,
                  y: 2500,
                },
                {
                  x: 1671712200000,
                  y: 2800,
                },
              ],
              borderColor: 'rgb(153, 102, 255)',
              backgroundColor: 'rgba(153, 102, 255, 0.5)',
              borderWidth: 2,
            },
            {
              label: 'ضایعات چمفر',
              data: [
                {
                  x: 1671654600000,
                  y: 4000,
                },
                {
                  x: 1671683400000,
                  y: 2300,
                },
                {
                  x: 1671712200000,
                  y: 1600,
                },
              ],
              borderColor: 'rgb(38, 145, 105)',
              backgroundColor: 'rgba(38, 145, 105, 0.5)',
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
              text: 'گزارش ضایعات خط 1',
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
                minRotation: 15,
                maxTicksLimit: 18,
                maxRotation: 90,
                callback(_, index, ticks) {
                  const formatted = formatter(ticks[index].value)
                  return formatted
                },
                source: 'data',
                align: 'center',
              },
            },
            y: {
              display: true,
              beginAtZero: true,
              title: {
                display: true,
                text: 'متر',
              },
              ticks: {},
            },
          },
        }}
      />
    </div>
  )
}

const persianDate = new Intl.DateTimeFormat('fa-IR', {
  month: 'short',
  day: 'numeric',
})
const shifts = {
  0: 'صبح',
  8: 'ظهر',
  16: 'شب',
}
function formatter(timestamp: number) {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const shift = shifts[`${hour}`]
  const dateString = persianDate.format(date)

  return `${dateString} شیفت ${shift}`
}
