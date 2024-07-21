import React from 'react'
import siloImg from '@/images/icons/silo.webp'

const siloList = [
  {
    label: 'سیلوی دیوار',
    data: [
      { label: 'سیلو 1', weight: '62 تن' },
      { label: 'سیلو 2', weight: '76 تن' },
      { label: 'سیلو 3', weight: '80 تن' },
      { label: 'سیلو 4', weight: '66 تن' },
      { label: 'سیلو 5', weight: '74 تن' },
      { label: 'سیلو 6', weight: '69 تن' },
      { label: 'سیلو 7', weight: '69 تن' },
      { label: 'سیلو 8', weight: '68 تن' },
      { label: 'سیلو 9', weight: '68 تن' },
    ],
  },
  {
    label: 'سیلوی کف',
    data: [
      { label: 'سیلو 1', weight: '62 تن' },
      { label: 'سیلو 2', weight: '76 تن' },
      { label: 'سیلو 3', weight: '80 تن' },
      { label: 'سیلو 4', weight: '66 تن' },
      { label: 'سیلو 5', weight: '74 تن' },
      { label: 'سیلو 6', weight: '69 تن' },
      { label: 'سیلو 7', weight: '69 تن' },
      { label: 'سیلو 8', weight: '68 تن' },
      { label: 'سیلو 9', weight: '68 تن' },
      { label: 'سیلو 10', weight: '75 تن' },
      { label: 'سیلو 11', weight: '85 تن' },
      { label: 'سیلو 12', weight: '83 تن' },
      { label: 'سیلو 13', weight: '84 تن' },
      { label: 'سیلو 14', weight: '81 تن' },
      { label: 'سیلو 15', weight: '79 تن' },
      { label: 'سیلو 16', weight: '76 تن' },
      { label: 'سیلو 17', weight: '75 تن' },
      { label: 'سیلو 18', weight: '84 تن' },
    ],
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
        <h1 className='text-2xl font-bold'>موجودی سیلو های گرانول</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {siloList.map(silo => (
          <article key={silo.label} className='flex flex-col gap-2'>
            <h2 className='px-3 text-xl font-bold'>{silo.label}</h2>
            <div // all cards container
              className='flex flex-wrap items-center justify-start'
            >
              {silo.data.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_25%] 2xl:flex-[0_0_16.6%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    <p>{data.label}</p>
                    <div className='flex items-center gap-2'>
                      <dt className='text-sm text-slate-500 after:content-[":"]'>
                        موجودی
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
