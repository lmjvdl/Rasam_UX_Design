import React from 'react'
import pressImg from '@/images/icons/press.webp'
import { cn } from '@/utils/ui/globals'

const pressData = [
  {
    label: 'پرس 1',
    status: 'on',
    inputSoil: '34,546 کیلوگرم',
    cycle: '7',
    avgCycle: '8',
    size: '90x30',
    pressCount: '3,470',
    outputBiscuits: '6,940',
    dryerInput: '6,940',
    dryerOutput: '6,925',
    finalPressure: '280/2 کیلوگرم بر سانتی متر مربع',
    avgThickness: '10/3 میلی متر',
    avgWeight: '5/3 کیلوگرم',
  },
  {
    label: 'پرس 2',
    status: 'on',
    inputSoil: '34,546 کیلوگرم',
    cycle: '6',
    avgCycle: '7',
    size: '90x30',
    pressCount: '3,470',
    outputBiscuits: '6,940',
    dryerInput: '6,940',
    dryerOutput: '6,925',
    finalPressure: '280/2 کیلوگرم بر سانتی متر مربع',
    avgThickness: '10/3 میلی متر',
    avgWeight: '5/3 کیلوگرم',
  },
  {
    label: 'پرس 3',
    status: 'off',
    inputSoil: '34,546 کیلوگرم',
    cycle: '0',
    avgCycle: '2',
    size: '90x30',
    pressCount: '3,470',
    outputBiscuits: '6,940',
    dryerInput: '6,940',
    dryerOutput: '6,925',
    finalPressure: '280/2 کیلوگرم بر سانتی متر مربع',
    avgThickness: '10/3 میلی متر',
    avgWeight: '5/3 کیلوگرم',
  },
  {
    label: 'پرس 4',
    status: 'on',
    inputSoil: '34,546 کیلوگرم',
    cycle: '9',
    avgCycle: '7',
    size: '90x30',
    pressCount: '3,470',
    outputBiscuits: '6,940',
    dryerInput: '6,940',
    dryerOutput: '6,925',
    finalPressure: '280/2 کیلوگرم بر سانتی متر مربع',
    avgThickness: '10/3 میلی متر',
    avgWeight: '5/3 کیلوگرم',
  },
]

export default function Live() {
  return (
    <div // press live root
    >
      <header // press main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // press image
          src={pressImg}
          alt='پرس'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>پرس</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        <article // all cards container
          className='flex flex-wrap items-center justify-start'
        >
          {pressData.map(data => (
            <dl // card container
              key={data.label}
              className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]'
            >
              <div className='flex flex-col gap-3 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                <div // card title
                  className='flex items-center gap-2'
                >
                  <div
                    className={cn(
                      'h-8 w-8 rounded-full shadow-lg',
                      data.status === 'on'
                        ? 'animate-blink bg-emerald-600'
                        : 'bg-slate-400',
                    )}
                  />
                  <p>{data.label}</p>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    میزان خاک ورودی از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.inputSoil}</dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    سیکل پرس
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.cycle}</dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    میانگین سیکل پرس از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.avgCycle}</dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    سایز کاشی
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.size}</dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    تعداد ضربه پرس از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>
                    {data.pressCount}
                  </dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    بیسکوییت خروجی از ا‌ول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>
                    {data.outputBiscuits}
                  </dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    ورودی درایر از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>
                    {data.dryerInput}
                  </dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    خروجی درایر از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>
                    {data.dryerOutput}
                  </dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    فشار نهایی
                  </dt>
                  <dd className='font-bold text-slate-600'>
                    {data.finalPressure}
                  </dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    میانگین ضخامت از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>
                    {data.avgThickness}
                  </dd>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    میانگین وزن از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.avgWeight}</dd>
                </div>
              </div>
            </dl>
          ))}
        </article>
      </section>
    </div>
  )
}
