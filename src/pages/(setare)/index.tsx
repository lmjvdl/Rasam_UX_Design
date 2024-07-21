import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { routes } from '@/utils/(setare)/routes'
import factoryLogo from '@/images/logo/192.webp'

export default function Setare() {
  return (
    <Routes>
      <Route index element={<Home />} />
      {routes.map(link => (
        <Route
          path={link.path + '/*'}
          element={<link.element />}
          key={link.label}
        />
      ))}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

function Home() {
  return (
    <div // factory root
      id='setare-factory'
      className=''
    >
      <header // factory main header
        className='flex flex-wrap items-center justify-center sm:justify-normal '
      >
        <img // factory logo
          src={factoryLogo}
          alt='لوگوی شرکت رسام'
          className='h-36 w-36 object-contain p-4'
        />
        <div // factory welcome
          className='flex flex-col gap-6'
        >
          <h1 className='text-2xl font-bold'>
            به پنل مانیتورینگ و گزارشات کارخانه کاشی خوش آمدید
          </h1>
          <p className='text-lg'>
            برای شروع می‌توانید یکی از سامانه های زیر را انتخاب نمایید
          </p>
        </div>
      </header>
      <section // system select root
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
                alt=''
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
