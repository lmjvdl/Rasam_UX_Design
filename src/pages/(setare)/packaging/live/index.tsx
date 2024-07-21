import React from 'react'
import packagingImg from '@/images/icons/packaging.webp'

const degrees = [
  {
    label: 'درجه 1',
    status: 'on',
    quantity: '1725',
    percentage: '69%',
  },
  {
    label: 'درجه 2',
    status: 'on',
    quantity: '325',
    percentage: '13%',
  },
  {
    label: 'درجه 3',
    status: 'off',
    quantity: '150',
    percentage: '6%',
  },
  {
    label: 'درجه 4',
    status: 'on',
    quantity: '150',
    percentage: '5%',
  },
  {
    label: 'درجه 5',
    status: 'on',
    quantity: '125',
    percentage: '5%',
  },
  {
    label: 'درجه 6',
    status: 'off',
    quantity: '0',
    percentage: '0%',
  },
]

const packagingList = [
  {
    label: 'خط 1',
    produce: '2475',
    engines: degrees,
  },
  {
    label: 'خط 2',
    produce: '2673',
    engines: degrees,
  },
  {
    label: 'خط 3',
    produce: '4257',
    engines: degrees,
  },
  {
    label: 'خط 4',
    produce: '7623',
    engines: degrees,
  },
]
export default function Live() {
  return (
    <div // packaging live root
    >
      <header // packaging main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // packaging image
          src={packagingImg}
          alt='بسته بندی'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>بسته بندی</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {packagingList.map(productionData => (
          <article
            key={productionData.label} // all cards container
            className='bg-slate-100/50 p-3 shadow-lg xl:flex xl:flex-wrap xl:items-stretch xl:justify-start'
          >
            <dl // card container
              className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]'
            >
              <div className='flex h-full flex-col gap-4'>
                <div // card title
                  className='flex items-center gap-2 border-b border-slate-300 pb-3'
                >
                  <p className='text-lg font-bold'>{productionData.label}</p>
                </div>

                <div className='flex items-center justify-between gap-2'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    تعداد کل کاشی تولیدی
                  </dt>
                  <dd className='font-bold text-slate-600' dir='ltr'>
                    {productionData.produce}
                  </dd>
                </div>
              </div>
            </dl>
            <div className='flex flex-[0_0_100%] flex-wrap items-center justify-start md:flex-[0_0_50%] xl:flex-[0_0_75%] 2xl:flex-[0_0_80%]'>
              {productionData.engines.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    <div // card title
                      className='flex items-center gap-2 border-b border-slate-300 pb-3'
                    >
                      <p className='text-lg font-bold'>{data.label}</p>
                    </div>
                    <div className='flex items-center justify-between gap-2 border-b border-slate-300 pb-3'>
                      <dt className='text-sm text-slate-500 after:content-[":"]'>
                        تعداد کاشی تولیدی
                      </dt>
                      <dd className='font-bold text-slate-600' dir='ltr'>
                        {data.quantity}
                      </dd>
                    </div>
                    <div className='flex items-center justify-between gap-2'>
                      <dt className='text-sm text-slate-500 after:content-[":"]'>
                        درصد کاشی تولیدی
                      </dt>
                      <dd className='font-bold text-slate-600' dir='ltr'>
                        {data.percentage}
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
