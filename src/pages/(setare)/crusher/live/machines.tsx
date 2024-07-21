import React from 'react'
import crusherImage from '@/images/icons/crusher.webp'
import offImg from '@/images/icons/switch-off.webp'
import onImg from '@/images/icons/switch-on.webp'

const allCrushers = [
  {
    label: 'خط 1',
    status: 'off',
    data: [
      [
        {
          label: 'سنگ شکن',
          data: 'فکی',
        },
        {
          label: 'نوع خاک',
          data: 'فلدسپات',
        },
        {
          label: 'نرخ خردایش',
          data: '35 تن بر ساعت',
        },
        {
          label: 'مدت زمان توقف',
          data: '37 دقیقه',
        },
      ],
      [
        {
          label: 'سنگ شکن',
          data: 'فکی',
        },
        {
          label: 'نوع خاک',
          data: 'فلدسپات',
        },
        {
          label: 'نرخ خردایش',
          data: '34 تن بر ساعت',
        },
        {
          label: 'مدت زمان توقف',
          data: '43 دقیقه',
        },
      ],
      [
        {
          label: 'سنگ شکن',
          data: 'سانتریفیوژ',
        },
        {
          label: 'نوع خاک',
          data: 'فلدسپات',
        },
        {
          label: 'نرخ خردایش',
          data: '25 تن بر ساعت',
        },
        {
          label: 'مدت زمان توقف',
          data: '57 دقیقه',
        },
      ],
    ],
  },
  {
    label: 'خط 2',
    status: 'on',
    data: [
      [
        {
          label: 'سنگ شکن',
          data: 'فکی',
        },
        {
          label: 'نوع خاک',
          data: 'فلدسپات',
        },
        {
          label: 'نرخ خردایش',
          data: '34 تن بر ساعت',
        },
      ],
      [
        {
          label: 'سنگ شکن',
          data: 'سانتریفیوژ',
        },
        {
          label: 'نوع خاک',
          data: 'فلدسپات',
        },
        {
          label: 'نرخ خردایش',
          data: '25 تن بر ساعت',
        },
      ],
    ],
  },
]
export default function Machines() {
  return (
    <div // crusher live root
    >
      <header // crusher main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // crusher image
          src={crusherImage}
          alt='سنگ شکن'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>کارکرد لحظه ای سنگ شکن</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {allCrushers.map(crusherLine => (
          <article key={crusherLine.label} className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <h2 className='px-3 text-xl font-bold'>{crusherLine.label}</h2>
              <img
                src={crusherLine.status === 'on' ? onImg : offImg}
                alt={crusherLine.status === 'on' ? 'روشن' : 'خاموش'}
                className='h-12 w-12'
              />
            </div>
            <div // all cards container
              className='flex flex-wrap items-center justify-center'
            >
              {crusherLine.data.map((crushers, index) => (
                <dl
                  key={index}
                  // card container
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    {crushers.map(crusher => (
                      <div
                        key={crusher.label}
                        className='flex items-center gap-2'
                      >
                        <dt className='text-sm text-slate-500 after:content-[":"]'>
                          {crusher.label}
                        </dt>
                        <dd className='font-bold'>{crusher.data}</dd>
                      </div>
                    ))}
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
