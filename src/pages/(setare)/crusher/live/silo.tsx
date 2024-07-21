import React from 'react'
import siloImg from '@/images/icons/silo.webp'
import { cn } from '@/utils/ui/globals'

const oneSiloData = [
  {
    label: 'سیلو شماره 1',
    status: 'idle',
    soilType: 'بنتونیت',
    weight: '23 تن',
  },
  {
    label: 'سیلو شماره 2',
    status: 'filling',
    soilType: 'کائولن ASR',
    weight: '40 تن',
  },
  {
    label: 'سیلو شماره 3',
    status: 'idle',
    soilType: 'تالک',
    weight: '26 تن',
  },
  {
    label: 'سیلو شماره 4',
    status: 'idle',
    soilType: 'فلدسپات',
    weight: '50 تن',
  },
  {
    label: 'سیلو شماره 5',
    status: 'idle',
    soilType: 'تالک',
    weight: '34 تن',
  },
  {
    label: 'سیلو شماره 6',
    status: 'idle',
    soilType: 'فلدسپات',
    weight: '46 تن',
  },
  {
    label: 'سیلو شماره 7',
    status: 'idle',
    soilType: 'فلدسپات',
    weight: '19 تن',
  },
  {
    label: 'سیلو شماره 8',
    status: 'idle',
    soilType: 'بنتونیت',
    weight: '23 تن',
  },
  {
    label: 'سیلو شماره 9',
    status: 'idle',
    soilType: 'کائولن ASR',
    weight: '35 تن',
  },
  {
    label: 'سیلو شماره 10',
    status: 'filling',
    soilType: 'بنتونیت',
    weight: '27 تن',
  },
]

const siloList = [
  {
    label: 'سیلوی دیوار',
    data: oneSiloData,
  },
  {
    label: 'سیلوی کف',
    data: oneSiloData,
  },
]

export default function Silo() {
  return (
    <div // silo live root
    >
      <header // silo main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // silo image
          src={siloImg}
          alt='دو تا سیلو'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>موجودی سیلو های خروجی سنگ شکن</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {siloList.map(silo => (
          <article key={silo.label} className='flex flex-col gap-2'>
            <h2 className='px-3 text-xl font-bold'>{silo.label}</h2>
            <div // all cards container
              className='flex flex-wrap items-center justify-center'
            >
              {silo.data.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    <div // card title
                      className='flex items-center gap-2'
                    >
                      <div
                        className={cn(
                          'h-8 w-8 rounded-full shadow-lg',
                          data.status === 'filling'
                            ? 'animate-blink bg-emerald-600'
                            : 'bg-slate-400',
                        )}
                      />
                      <p>{data.label}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <dt className='text-sm text-slate-500 after:content-[":"]'>
                        نوع خاک
                      </dt>
                      <dd className='font-bold'>{data.soilType}</dd>
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
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
