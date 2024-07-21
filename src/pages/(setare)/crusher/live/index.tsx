import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Trucks from './trucks'
import truckImg from '@/images/icons/truck.webp'
import soilImg from '@/images/icons/soil.webp'
import crusherImg from '@/images/icons/crusher.webp'
import siloImg from '@/images/icons/silo.webp'
import Soil from './soil'
import Machines from './machines'
import Silo from './silo'

export default function Live() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='trucks' element={<Trucks />} />
      <Route path='soil' element={<Soil />} />
      <Route path='machines' element={<Machines />} />
      <Route path='silo' element={<Silo />} />
    </Routes>
  )
}

const routes = [
  {
    label: 'ماشین های موجود در کارخانه',
    icon: truckImg,
    path: 'trucks',
    element: Trucks,
  },
  {
    label: 'موجودی خاک ها',
    icon: soilImg,
    path: 'soil',
    element: Soil,
  },
  {
    label: 'سنگ شکن',
    icon: crusherImg,
    path: 'machines',
    element: Machines,
  },
  {
    label: 'سیلو های خروجی سنگ شکن',
    icon: siloImg,
    path: 'silo',
    element: Silo,
  },
]

function Home() {
  return (
    <div>
      <header // crusher main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // crusher image
          src={crusherImg}
          alt='سنگ شکن'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>سنگ شکن</h1>
      </header>
      <section // crusher select root
        className='flex flex-wrap items-center justify-center'
      >
        {routes.map(link => (
          <div // link container
            key={link.label}
            className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]'
          >
            <Link // section link
              to={link.path}
              className='flex flex-col items-center gap-3 rounded-lg  bg-slate-100/50 p-3 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl'
            >
              <div>{link.label}</div>
              <img
                src={link.icon}
                alt={link.label}
                className='h-20 w-40 object-contain'
                width={160}
                height={80}
              />
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}
