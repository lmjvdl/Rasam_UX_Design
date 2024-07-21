import { cn } from '@/utils/ui/globals'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types'

const refinedData = [
  {
    label: 'بالمیل 3 کف',
    data: [
      {
        x: 1671481800000,
        y: 2.48,
      },

      {
        x: 1671568200000,
        y: 2.3,
      },

      {
        x: 1671654600000,
        y: 2.41,
      },

      {
        x: 1671741000000,
        y: 2.14,
      },

      {
        x: 1671827400000,
        y: 0.11,
      },
    ],
    borderColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgb(54, 162, 235, 0.5)',
    borderWidth: 2,
    stack: 'b1',
  },
  {
    label: 'بالمیل 3 کف',
    data: [
      {
        x: 1671481800000,
        y: 0,
        incomplete: true,
      },

      {
        x: 1671568200000,
        y: 0.3,
        incomplete: true,
      },

      {
        x: 1671654600000,
        y: 0.05,
        incomplete: true,
      },

      {
        x: 1671741000000,
        y: 0.54,
        incomplete: true,
      },
      {
        x: 1671827400000,
        y: 0.11,
        incomplete: true,
      },
    ],
    borderColor: 'rgb(168, 162, 158)',
    backgroundColor: 'rgba(168, 162, 158, 0.5)',
    borderWidth: 2,
    stack: 'b1',
  },
  {
    label: 'بالمیل 2 دیوار',
    data: [
      {
        x: 1671481800000,
        y: 2.48,
      },
      {
        x: 1671568200000,
        y: 2.3,
      },
      {
        x: 1671654600000,
        y: 2.91,
      },
      {
        x: 1671741000000,
        y: 1.54,
      },
      {
        x: 1671827400000,
        y: 0.11,
      },
    ],
    borderColor: 'rgb(244, 63, 94)',
    backgroundColor: 'rgb(244, 63, 94, 0.5)',
    borderWidth: 2,
    stack: 'b2',
  },
  {
    label: 'بالمیل 2 دیوار',
    data: [
      {
        x: 1671481800000,
        y: 0.34,
        incomplete: true,
      },

      {
        x: 1671568200000,
        y: 0.12,
        incomplete: true,
      },

      {
        x: 1671654600000,
        y: 0.03,
        incomplete: true,
      },

      {
        x: 1671741000000,
        y: 1.14,
        incomplete: true,
      },

      {
        x: 1671827400000,
        y: 0.11,
        incomplete: true,
      },
    ],
    borderColor: 'rgb(168, 162, 158)',
    backgroundColor: 'rgba(168, 162, 158, 0.5)',
    borderWidth: 2,
    stack: 'b2',
  },
]

const myLegendElements = refinedData
  .map(({ label, backgroundColor, borderColor }, index) => ({
    label,
    backgroundColor,
    borderColor,
    id: index,
  }))
  .filter((_a, i) => Math.trunc(i / 2) === i / 2)

export default function Visualization() {
  const chartRef =
    React.useRef<ChartJSOrUndefined<'bar', { x: number; y: number }[]>>(null)
  const [hidden, setHidden] = React.useState<number[]>([])
  const [showOffline, setShowOffline] = React.useState(true)

  return (
    <div className='relative flex h-[70vh] items-center justify-center bg-transparent'>
      <Bar
        ref={chartRef}
        className='absolute top-0 h-full'
        data={{
          datasets: refinedData,
        }}
        options={{
          indexAxis: 'x',
          locale: 'fa-IR',
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 66,
            },
          },
          interaction: {
            intersect: true,
            mode: 'nearest',
          },
          plugins: {
            title: {
              display: false,
              text: 'تعداد شارژ بالمیل در هر روز',
            },
            legend: {
              display: false,
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
                mode: 'x',
                scaleMode: 'y',
              },
            },
            tooltip: {
              callbacks: {
                title(a) {
                  return formatter(a.at(0)?.parsed.x || 0)
                },
                afterBody(a) {
                  if (isIncomplete(a.at(0)?.raw))
                    return `زمان شارژ ناقص 1 ساعت و 12 دقیقه`
                  return `تعداد شارژ: 2 شارژ و 3 ساعت و 14 دقیقه`
                },
                label(a) {
                  return a.dataset.label || ''
                },
              },
              rtl: true,
              titleAlign: 'left',
              bodyAlign: 'right',
            },
          },
          scales: {
            x: {
              type: 'time',
              display: true,

              title: {
                display: true,
                text: 'شیفت',
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
              stacked: true,
              title: {
                display: true,
                text: 'تعداد شارژ',
              },
              ticks: {},
            },
          },
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '8px',
          right: '50%',
          transform: 'translate(50%, 0)',
          width: '100%',
          userSelect: 'none',
        }}
      >
        <p className='mb-4 text-center text-xs font-bold text-slate-500'>
          تعداد شارژ بالمیل در هر روز
        </p>
        <div className='flex items-center justify-center gap-2'>
          {myLegendElements.map(legendElement => (
            <button
              key={legendElement.id}
              onClick={() => {
                const viz = hidden.includes(legendElement.id)

                chartRef.current?.setDatasetVisibility(legendElement.id, viz)
                chartRef.current?.setDatasetVisibility(
                  legendElement.id + 1,
                  viz,
                )
                chartRef.current?.update()

                if (hidden.includes(legendElement.id)) {
                  setHidden(hidden.filter(el => el !== legendElement.id))
                } else {
                  const temp = hidden.slice()
                  temp.push(legendElement.id)
                  setHidden(temp)
                }
              }}
            >
              <div className='flex items-center justify-center gap-2'>
                <p
                  className='text-xs text-gray-600'
                  style={{
                    textDecoration: !hidden.includes(legendElement.id)
                      ? ''
                      : 'solid 2px line-through rgb(75 85 99)',
                  }}
                >
                  {legendElement.label}
                </p>
                <div
                  className='h-[14px] w-[40px]'
                  style={{
                    backgroundColor: legendElement.backgroundColor,
                    borderColor: legendElement.borderColor,
                    borderWidth: '2px',
                  }}
                />
              </div>
            </button>
          ))}
          <button
            onClick={() => {
              const isVisible = !showOffline
              setShowOffline(isVisible)
              const z = new Array(
                chartRef.current?.data.datasets.length ?? 0 / 2,
              ).fill(null)
              z.forEach((_a, i) => {
                chartRef.current?.setDatasetVisibility(2 * i + 1, isVisible)
              })
              chartRef.current?.update()
            }}
          >
            <div className='flex items-center justify-center gap-2'>
              <p
                className='text-xs text-gray-600'
                style={{
                  textDecoration: showOffline
                    ? ''
                    : 'solid 2px line-through rgb(75 85 99)',
                }}
              >
                شارژ ناقص
              </p>
              <div className='h-[12px] w-[40px] border-2 border-gray-400 bg-gray-400/50' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

const persianDate = new Intl.DateTimeFormat('fa-IR', {
  month: 'short',
  day: 'numeric',
})

function formatter(timestamp: number) {
  const date = new Date(timestamp)
  const dateString = persianDate.format(date)

  return `${dateString}`
}

function CHART_COLORS() {
  return ['#3b82f6', '#f43f5e', '#059669', '#fb923c', '#9333ea', '#eab308']
}

function isIncomplete(raw: unknown) {
  if (typeof raw !== 'object') return false
  if (!raw) return false
  if (!('incomplete' in raw)) return false
  if (typeof raw.incomplete !== 'boolean') return false
  return raw.incomplete
}
