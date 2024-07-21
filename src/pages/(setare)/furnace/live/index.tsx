import React from 'react'
import furnaceImg from '@/images/icons/furnace.webp'
import { cn } from '@/utils/ui/globals'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './detail'

export default function Live() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='detail' element={<Detail />} />
    </Routes>
  )
}

const furnaceList = [
  {
    label: 'کوره دیوار',
    data: [
      {
        label: 'کوره 1 A',
        status: 'on',
        cycle: '23',
      },
      {
        label: 'کوره B 1',
        status: 'off',
        cycle: '40',
      },
      {
        label: 'کوره A 2',
        status: 'on',
        cycle: '26',
      },
      {
        label: 'کوره B 2',
        status: 'off',
        cycle: '50',
      },
      {
        label: 'کوره 3',
        status: 'on',
        cycle: '34',
      },
      {
        label: 'کوره 4',
        status: 'on',
        cycle: '46',
      },
      {
        label: 'کوره 5',
        status: 'on',
        cycle: '19',
      },
    ],
  },
  {
    label: 'کوره کف',
    data: [
      {
        label: 'کوره 6',
        status: 'on',
        cycle: '46',
      },
      {
        label: 'کوره 7',
        status: 'on',
        cycle: '19',
      },
      {
        label: 'کوره 8',
        status: 'on',
        cycle: '23',
      },
    ],
  },
]

function Home() {
  return (
    <div // furnace live root
    >
      <header // furnace main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // furnace image
          src={furnaceImg}
          alt='کوره'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>همه کوره ها</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {furnaceList.map(furnace => (
          <article key={furnace.label} className='flex flex-col gap-2'>
            <h2 className='px-3 text-xl font-bold'>{furnace.label}</h2>
            <div // all cards container
              className='flex flex-wrap items-center justify-start'
            >
              {furnace.data.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]'
                >
                  <Link
                    to={`./detail?title=${data.label}&status=${data.status}`}
                    className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl'
                  >
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
                    <div className='flex items-center gap-2'>
                      <dt className='text-sm text-slate-500 after:content-[":"]'>
                        سیکل کوره
                      </dt>
                      <dd className='font-bold'>{data.cycle}</dd>
                    </div>
                  </Link>
                </dl>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
