import React from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

interface CustomScrollProps {
  children: React.ReactNode
}

export default function CustomScroll({ children }: CustomScrollProps) {
  return (
    <ScrollArea.Root className='h-full overflow-hidden' scrollHideDelay={1000}>
      <ScrollArea.Viewport className='h-full w-full'>
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className='w-1 transition-all hover:w-2'
        orientation='vertical'
      >
        <ScrollArea.Thumb className='rounded-full bg-slate-950/40 transition-colors hover:bg-slate-950/70' />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
