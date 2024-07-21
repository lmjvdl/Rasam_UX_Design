import React from 'react'
import soilImg from '@/images/icons/soil.webp'
import { cn } from '@/utils/ui/globals'

const soilData = [
  {
    label: 'فلدسپات دشت',
    weight: '23 تن',
    className: 'brightness-110 saturate-[0.3]',
  },
  {
    label: 'کائولن ASR',
    weight: '40 تن',
    className: 'brightness-105 hue-rotate-15 saturate-[0.3]',
  },
  {
    label: 'تالک',
    weight: '26 تن',
    className: 'brightness-125 saturate-[0.1]',
  },
  {
    label: 'بنتونیت',
    weight: '50 تن',
    className: 'brightness-95 hue-rotate-15 saturate-50 ',
  },
]

export default function Soil() {
  return (
    <div // soil live root
    >
      <header // soil main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // soil image
          src={soilImg}
          alt='تپه خاک'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>موجودی خاک</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        <article // all cards container
          className='flex flex-wrap items-center justify-center'
        >
          {soilData.map(data => (
            <dl // card container
              key={data.label}
              className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]'
            >
              <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                <div // card title
                  className='flex items-center gap-2'
                >
                  <img
                    src={soilImg}
                    alt='تپه خاک'
                    className={cn(
                      data.className,
                      'h-12 w-12 object-contain filter',
                    )}
                  />
                  <p>{data.label}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    وزن خاک
                  </dt>
                  <dd className='font-bold'>{data.weight}</dd>
                </div>
              </div>
            </dl>
          ))}
        </article>
      </section>
    </div>
  )
}
