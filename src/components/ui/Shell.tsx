import React from 'react'
import { cn } from '@/utils/ui/globals'
import CustomScroll from '@/components/ui/CustomScroll'
import useScreen from '@/hooks/ui/useScreen'
import CloseButton from './CloseButton'
import Navbar from './Navbar'

interface ShellProps {
  children: React.ReactNode
  mobileHeaderText?: string
}
export default function Shell({
  children,
  mobileHeaderText = 'Rasamiot',
}: ShellProps) {
  const [open, setOpen] = React.useState(false)
  const { isMobile } = useScreen()
  return (
    <div // shell root
      className='flex min-h-screen p-2 pt-16 sm:block sm:h-screen sm:pt-2'
    >
      <div // shell body
        className='flex-grow rounded-lg bg-slate-100/50 sm:flex sm:h-full sm:overflow-hidden sm:rounded-xl'
      >
        <div // shell desktop nav
          className={cn('p-3 sm:rounded sm:bg-white', isMobile ? 'hidden' : '')}
        >
          <Navbar.DesktopNav />
        </div>
        <div // shell content
          className='p-2 sm:flex-grow'
        >
          {isMobile ? (
            <div>{children}</div>
          ) : (
            <CustomScroll>{children}</CustomScroll>
          )}
        </div>
      </div>
      <div // shell mobile header
        className='fixed left-0 right-0 top-0 h-16 p-2 sm:hidden'
      >
        <div className='flex h-full items-center justify-between overflow-hidden rounded-lg bg-slate-100/50 px-2'>
          <p>{mobileHeaderText}</p>
          <CloseButton
            closed={!open}
            onClick={() => {
              setOpen(o => !o)
            }}
          />
        </div>
      </div>
      <div // shell mobile nav
        className={cn(
          'fixed inset-2 top-16 overflow-y-auto rounded-lg bg-slate-100 p-4 sm:hidden',
          open ? '' : 'hidden',
        )}
      >
        <Navbar.MobileNav closeMenu={() => setOpen(false)} />
      </div>
    </div>
  )
}
