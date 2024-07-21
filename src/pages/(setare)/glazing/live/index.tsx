import React from 'react'
import glazingImg from '@/images/icons/glazing.webp'

const glazingData = [
  {
    label: 'خط 1',
    speed: '4 عدد بر دقیقه',
    completed: '31 عدد',
    design: 'مونراک',
    size: '30x90',
  },
  {
    label: 'خط 2',
    speed: '5 عدد بر دقیقه',
    completed: '29 عدد',
    design: 'راسان گلد',
    size: '60x60',
  },
  {
    label: 'خط 3',
    speed: '6 عدد بر دقیقه',
    completed: '124 عدد',
    design: 'راموس طوسی',
    size: '60x120',
  },
  {
    label: 'خط 4',
    speed: '5 عدد بر دقیقه',
    completed: '17 عدد',
    design: 'لامیا طوسی',
    size: '60x120',
  },
  {
    label: 'خط 5',
    speed: '3 عدد بر دقیقه',
    completed: '26 عدد',
    design: 'آناتا طوسی',
    size: '60x60',
  },
  {
    label: 'خط 6',
    speed: '2 عدد بر دقیقه',
    completed: '19 عدد',
    design: 'کاراکاوا طوسی',
    size: '30x60',
  },
]

export default function Live() {
  return (
    <div // glazing live root
    >
      <header // glazing main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // glazing image
          src={glazingImg}
          alt='خط لعاب'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>خط لعاب</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        <article // all cards container
          className='flex flex-wrap items-center justify-start'
        >
          {glazingData.map(data => (
            <dl // card container
              key={data.label}
              className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]'
            >
              <div className='flex flex-col gap-3 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                <p // card title
                  className='text-lg font-bold'
                >
                  {data.label}
                </p>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    سرعت دستگاه چاپ
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.speed}</dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    تعداد واگن های تکمیل شده از اول شیفت
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.completed}</dd>
                </div>
                <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    نام طرح
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.design}</dd>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    سایز
                  </dt>
                  <dd className='font-bold text-slate-600'>{data.size}</dd>
                </div>
              </div>
            </dl>
          ))}
        </article>
      </section>
    </div>
  )
}
