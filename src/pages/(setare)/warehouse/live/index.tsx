import React from 'react'
import warehouseImg from '@/images/icons/warehouse.webp'

export default function LIve() {
  return (
    <div // warehouse live root
    >
      <header // warehouse main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // warehouse image
          src={warehouseImg}
          alt='انبار'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>انبار محصول</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        <dl // card container
          className='flex flex-wrap justify-evenly gap-4'
        >
          <div className='flex items-center gap-2'>
            <dt className='text-sm text-slate-500 after:content-[":"]'>
              مقدار پالت ورودی
            </dt>
            <dd className='font-bold'>73</dd>
          </div>
          <div className='flex items-center gap-2'>
            <dt className='text-sm text-slate-500 after:content-[":"]'>
              مقدار پالت خروجی
            </dt>
            <dd className='font-bold'>33</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
