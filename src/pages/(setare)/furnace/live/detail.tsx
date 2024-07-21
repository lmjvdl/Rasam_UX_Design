import React from 'react'
import { useSearchParams } from 'react-router-dom'
import furnaceImg from '@/images/icons/furnace.webp'
import motorImg from '@/images/icons/motor.webp'
import offImg from '@/images/icons/switch-off.webp'
import onImg from '@/images/icons/switch-on.webp'
import { cn } from '@/utils/ui/globals'

const furnaceData = {
  furnaceInput: '2,760',
  cycle: '37',
  avgCycle: '38',
  furnaceOutput: '2,680',
  suplex: '870',
  engines: [
    {
      label: 'موتور 1',
      status: 'on',
      currentConsumption: '121 A',
      temperature: '50 ℃',
    },
    {
      label: 'موتور 2',
      status: 'on',
      currentConsumption: '133 A',
      temperature: '56 ℃',
    },
    {
      label: 'موتور 3',
      status: 'off',
      currentConsumption: '0 A',
      temperature: '70 ℃',
    },
    {
      label: 'موتور 4',
      status: 'on',
      currentConsumption: '186 A',
      temperature: '60 ℃',
    },
    {
      label: 'موتور 5',
      status: 'on',
      currentConsumption: '111 A',
      temperature: '52 ℃',
    },
    {
      label: 'موتور 6',
      status: 'off',
      currentConsumption: '0 A',
      temperature: '68 ℃',
    },
    {
      label: 'موتور 7',
      status: 'on',
      currentConsumption: '82 A',
      temperature: '66 ℃',
    },
    {
      label: 'موتور 8',
      status: 'on',
      currentConsumption: '144 A',
      temperature: '64 ℃',
    },
    {
      label: 'موتور 9',
      status: 'off',
      currentConsumption: '0 A',
      temperature: '54 ℃',
    },
    {
      label: 'موتور 10',
      status: 'on',
      currentConsumption: '123 A',
      temperature: '62 ℃',
    },
  ],
}

export default function Detail() {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const status = searchParams.get('status')
  return (
    <div // furnace detail live root
    >
      <header // furnace detail main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // furnace detail image
          src={furnaceImg}
          alt='کوره'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>{title}</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        <article // all cards container
          className='xl:flex xl:flex-wrap xl:items-stretch xl:justify-start'
        >
          <dl // card container
            className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]'
          >
            <div className='flex h-full flex-col gap-3 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
              <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                <dt className='text-sm text-slate-500 after:content-[":"]'>
                  وضعیت کوره
                </dt>
                <dd className='font-bold text-slate-600'>
                  <div
                    className={cn(
                      'h-8 w-8 rounded-full shadow-lg',
                      status === 'on'
                        ? 'animate-blink bg-emerald-600'
                        : 'bg-slate-400',
                    )}
                  />
                </dd>
              </div>
              <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                <dt className='text-sm text-slate-500 after:content-[":"]'>
                  سیکل کوره
                </dt>
                <dd className='font-bold text-slate-600'>
                  {furnaceData.cycle}
                </dd>
              </div>
              <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                <dt className='text-sm text-slate-500 after:content-[":"]'>
                  میانگین سیکل کوره از اول شیفت
                </dt>
                <dd className='font-bold text-slate-600'>
                  {furnaceData.avgCycle}
                </dd>
              </div>
              <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                <dt className='text-sm text-slate-500 after:content-[":"]'>
                  ورودی کوره
                </dt>
                <dd className='font-bold text-slate-600'>
                  {furnaceData.furnaceInput}
                </dd>
              </div>
              <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                <dt className='text-sm text-slate-500 after:content-[":"]'>
                  خروجی کوره
                </dt>
                <dd className='font-bold text-slate-600'>
                  {furnaceData.furnaceOutput}
                </dd>
              </div>
              <div className='flex items-center justify-between gap-2'>
                <dt className='text-sm text-slate-500 after:content-[":"]'>
                  موجودی سوبلکس
                </dt>
                <dd className='font-bold text-slate-600'>
                  {furnaceData.suplex}
                </dd>
              </div>
            </div>
          </dl>
          <div className='flex flex-[0_0_100%] flex-wrap items-center justify-start md:flex-[0_0_50%] xl:flex-[0_0_75%] 2xl:flex-[0_0_80%]'>
            {furnaceData.engines.map(data => (
              <dl // card container
                key={data.label}
                className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_20%]'
              >
                <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                  <div // card title
                    className='flex items-center gap-2 border-b border-slate-300 pb-3'
                  >
                    <img
                      src={motorImg}
                      alt='موتور'
                      className='h-12 w-12 object-contain'
                    />
                    <p className='text-lg font-bold'>{data.label}</p>
                    <div className='flex grow items-center justify-end'>
                      <img
                        src={data.status === 'on' ? onImg : offImg}
                        alt={data.status === 'on' ? 'روشن' : 'خاموش'}
                        className='h-12 w-12'
                      />
                    </div>
                  </div>
                  <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                    <dt className='text-sm text-slate-500 after:content-[":"]'>
                      جریان
                    </dt>
                    <dd className='font-bold text-slate-600' dir='ltr'>
                      {data.currentConsumption}
                    </dd>
                  </div>
                  <div className='flex items-center justify-between gap-2'>
                    <dt className='text-sm text-slate-500 after:content-[":"]'>
                      دما
                    </dt>
                    <dd className='font-bold text-slate-600' dir='ltr'>
                      {data.temperature}
                    </dd>
                  </div>
                </div>
              </dl>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
