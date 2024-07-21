import React from 'react'
import mucilageImg from '@/images/icons/mucilage.webp'

const mucilageList = [
  {
    label: 'مخزن انگوب',
    data: [
      { label: 'مخزن 1', weight: '1,000 لیتر' },
      { label: 'مخزن 2', weight: '3,500 لیتر' },
      { label: 'مخزن 3', weight: '4,000 لیتر' },
      { label: 'مخزن 4', weight: '3,700 لیتر' },
      { label: 'مخزن 5', weight: '2,800 لیتر' },
      { label: 'مخزن 6', weight: '3,400 لیتر' },
      { label: 'مخزن 7', weight: '2,900 لیتر' },
      { label: 'مخزن 8', weight: '2,000 لیتر' },
    ],
  },
  {
    label: 'مخزن لعاب',
    data: [
      { label: 'مخزن 1', weight: '2,300 لیتر' },
      { label: 'مخزن 2', weight: '4,500 لیتر' },
      { label: 'مخزن 3', weight: '3,200 لیتر' },
      { label: 'مخزن 4', weight: '3,500 لیتر' },
      { label: 'مخزن 5', weight: '3,100 لیتر' },
      { label: 'مخزن 6', weight: '4,200 لیتر' },
      { label: 'مخزن 7', weight: '2,800 لیتر' },
      { label: 'مخزن 8', weight: '5,000 لیتر' },
      { label: 'مخزن 9', weight: '4,800 لیتر' },
      { label: 'مخزن 10', weight: '4,000 لیتر' },
      { label: 'مخزن 11', weight: '3,000 لیتر' },
      { label: 'مخزن 12', weight: '2,900 لیتر' },
      { label: 'مخزن 13', weight: '2,700 لیتر' },
      { label: 'مخزن 14', weight: '3,200 لیتر' },
      { label: 'مخزن 15', weight: '4,000 لیتر' },
      { label: 'مخزن 16', weight: '2,500 لیتر' },
      { label: 'مخزن 17', weight: '3,700 لیتر' },
      { label: 'مخزن 18', weight: '4,900 لیتر' },
    ],
  },
  {
    label: 'مخزن انگوب زیر',
    data: [
      { label: 'مخزن 1', weight: '1.450 لیتر' },
      { label: 'مخزن 2', weight: '3,260 لیتر' },
      { label: 'مخزن 3', weight: '3,700 لیتر' },
      { label: 'مخزن 4', weight: '4,000 لیتر' },
      { label: 'مخزن 5', weight: '1,680 لیتر' },
      { label: 'مخزن 6', weight: '2,970 لیتر' },
    ],
  },
]

export default function Live() {
  return (
    <div // mucilage live root
    >
      <header // mucilage main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // mucilage image
          src={mucilageImg}
          alt='دو تا سیلو'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>مخازن لعاب و انگوب</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {mucilageList.map(mucilage => (
          <article key={mucilage.label} className='flex flex-col gap-2'>
            <h2 className='px-3 text-xl font-bold'>{mucilage.label}</h2>
            <div // all cards container
              className='flex flex-wrap items-center justify-start'
            >
              {mucilage.data.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_50%] p-2 md:flex-[0_0_25%] xl:flex-[0_0_20%] 2xl:flex-[0_0_16.6%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    <p>{data.label}</p>
                    <div className='flex items-center gap-2'>
                      <dt className='text-sm text-slate-500 after:content-[":"]'>
                        حجم
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
