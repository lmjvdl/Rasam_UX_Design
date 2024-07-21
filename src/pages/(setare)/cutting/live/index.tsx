import React from 'react'
import cuttingImg from '@/images/icons/cutting.webp'
import motorImg from '@/images/icons/motor.webp'
import offImg from '@/images/icons/switch-off.webp'
import onImg from '@/images/icons/switch-on.webp'

const engines = [
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
]

const cuttingList = [
  {
    label: 'خط 1',
    status: 'on',
    waste: '37 متر مربع',
    engines,
  },
  {
    label: 'خط 2',
    status: 'off',
    waste: '60 متر مربع',
    engines,
  },
  {
    label: 'خط 3',
    status: 'on',
    waste: '37 متر مربع',
    engines,
  },
  {
    label: 'خط 4',
    status: 'on',
    waste: '34 متر مربع',
    engines,
  },
]
export default function Live() {
  return (
    <div // cutting live root
    >
      <header // cutting main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // cutting image
          src={cuttingImg}
          alt='برش'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>برش</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {cuttingList.map(cuttingData => (
          <article
            key={cuttingData.label} // all cards container
            className='bg-slate-100/50 p-3 shadow-lg xl:flex xl:flex-wrap xl:items-stretch xl:justify-start'
          >
            <dl // card container
              className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]'
            >
              <div className='flex h-full flex-col gap-4'>
                <div // card title
                  className='flex items-center gap-2 border-b border-slate-300 pb-3'
                >
                  <p className='text-lg font-bold'>{cuttingData.label}</p>
                  <div className='flex flex-grow items-center justify-end'>
                    <img
                      src={cuttingData.status ? onImg : offImg}
                      alt={cuttingData.status ? 'روشن' : 'خاموش'}
                      className='h-12 w-12'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between gap-2'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    آمار ضایعات
                  </dt>
                  <dd className='font-bold text-slate-600' dir='ltr'>
                    {cuttingData.waste}
                  </dd>
                </div>
              </div>
            </dl>
            <div className='flex flex-[0_0_100%] flex-wrap items-center justify-start md:flex-[0_0_50%] xl:flex-[0_0_75%] 2xl:flex-[0_0_80%]'>
              {cuttingData.engines.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    <div // card title
                      className='flex items-center gap-2 border-b border-slate-300 pb-3'
                    >
                      <img
                        src={motorImg}
                        alt='موتور'
                        className='h-12 w-12 object-contain filter'
                      />
                      <p className='text-lg font-bold'>{data.label}</p>
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
        ))}
      </section>
    </div>
  )
}
