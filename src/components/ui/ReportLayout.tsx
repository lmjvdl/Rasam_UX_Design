import React from 'react'
import useScreen from '@/hooks/ui/useScreen'
import { cn } from '@/utils/ui/globals'
import { useLocation, useNavigate } from 'react-router-dom'
import { NormalSelect } from './Select'

interface BaseReportLayoutProps {
  children: React.ReactNode
  label: string
  icon: string
  links: { label: string; value: string }[]
}

export default function ReportLayout({
  icon,
  label,
  links,
  children,
}: BaseReportLayoutProps) {
  const { isMobileLandscape } = useScreen()
  return (
    <div className='flex flex-wrap'>
      <div
        className={cn(
          'flex-[0_0_100%] p-2 xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]',
          isMobileLandscape ? 'hidden' : 'block',
        )}
      >
        <div className='h-full rounded-lg bg-slate-100/50 p-3 shadow-lg'>
          <div className='flex flex-wrap items-center'>
            <div className='flex flex-[0_0_100%] items-center gap-4 p-2 md:flex-[0_0_50%] xl:flex-[0_0_100%]'>
              <img
                src={icon}
                alt={label}
                className='h-16 w-auto object-contain'
              />
              <h2 className='text-2xl font-bold'>{label}</h2>
            </div>
            <div className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_100%]'>
              <ReportSelect links={links} />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

interface PageReportLayoutProps {
  Visualization: React.ReactNode
  InputCenter: React.ReactNode
}

function Page({ InputCenter, Visualization }: PageReportLayoutProps) {
  const { isMobileLandscape, isMobilePortrait } = useScreen()
  return (
    <>
      <div
        className={cn(
          'flex-[0_0_100%] p-2 xl:flex-[0_0_66.7%] 2xl:flex-[0_0_75%]',
          isMobileLandscape ? 'hidden' : 'block',
        )}
      >
        <div className='h-full rounded-lg bg-slate-100/50 p-3 shadow-lg'>
          {InputCenter}
        </div>
      </div>
      <div
        className={cn(
          'flex-[0_0_100%] p-2',
          isMobilePortrait ? 'hidden' : 'block',
        )}
      >
        <div className='rounded-lg bg-slate-100/50 p-3 shadow-lg'>
          {Visualization}
        </div>
      </div>
    </>
  )
}

ReportLayout.Page = Page

interface ReportSelect {
  links: {
    label: string
    value: string
  }[]
}

function ReportSelect({ links }: ReportSelect) {
  const navigate = useNavigate()
  const location = useLocation()
  const thisPage = links.find(
    link => location.pathname.split('/').reverse().at(0) === link.value,
  )

  return (
    <NormalSelect
      placeholder='لطفا نوع گزارش را انتخاب کنید'
      options={links}
      onChange={route => navigate(route?.value || '')}
      defaultValue={thisPage}
    />
  )
}
