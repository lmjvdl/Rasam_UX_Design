import React from 'react'
import slurpImg from '@/images/icons/slurp.webp'

const slurpList = [
  {
    label: 'حوضچه کف',
    data: [
      {
        label: 'حوضچه 1',
        volume: '72 متر مکعب',
      },
      {
        label: 'حوضچه 2',
        volume: '86 متر مکعب',
      },
      {
        label: 'حوضچه 3',
        volume: '90 متر مکعب',
      },
      {
        label: 'حوضچه 4',
        volume: '76 متر مکعب',
      },
      {
        label: 'حوضچه 5',
        volume: '84 متر مکعب',
      },
      {
        label: 'حوضچه 6',
        volume: '79 متر مکعب',
      },
    ],
  },
  {
    label: 'حوضچه دیوار',
    data: [
      {
        label: 'حوضچه 1',
        volume: '102 متر مکعب',
      },
      {
        label: 'حوضچه 2',
        volume: '128 متر مکعب',
      },
      {
        label: 'حوضچه 3',
        volume: '132 متر مکعب',
      },
    ],
  },
]

export default function Slurp() {
  return (
    <div // slurp live root
    >
      <header // slurp main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // slurp image
          src={slurpImg}
          alt='حوض دوغاب'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>موجودی حوضچه های دوغاب</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {slurpList.map(slurp => (
          <article key={slurp.label} className='flex flex-col gap-2'>
            <h2 className='px-3 text-xl font-bold'>{slurp.label}</h2>
            <div // all cards container
              className='flex flex-wrap items-center justify-start'
            >
              {slurp.data.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    <p>{data.label}</p>
                    <div className='flex items-center gap-2'>
                      <dt className='text-sm text-slate-500 after:content-[":"]'>
                        حجم دوغاب
                      </dt>
                      <dd className='font-bold'>{data.volume}</dd>
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
