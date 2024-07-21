import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ballMillImg from '@/images/icons/body-prep.webp'
import slurpImg from '@/images/icons/slurp.webp'
import siloImg from '@/images/icons/silo.webp'
import BallMill from './ballMill'
import Slurp from './slurp'
import Silo from './silo'

export default function Live() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='ball-mill' element={<BallMill />} />
      <Route path='slurp' element={<Slurp />} />
      <Route path='silo' element={<Silo />} />
    </Routes>
  )
}

const routes = [
  {
    label: 'بالمیل ها',
    icon: ballMillImg,
    path: 'ball-mill',
    element: BallMill,
  },
  {
    label: 'حوضچه های دوغاب',
    icon: slurpImg,
    path: 'slurp',
    element: Slurp,
  },
  {
    label: 'سیلو های گرانول',
    icon: siloImg,
    path: 'silo',
    element: Silo,
  },
]

function Home() {
  return (
    <div>
      <header // ball mill main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // ball mill image
          src={ballMillImg}
          alt='تهیه بدنه'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>تهیه بدنه</h1>
      </header>
      <section // body-prep select root
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
