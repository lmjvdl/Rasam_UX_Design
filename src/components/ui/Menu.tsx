import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/ui/globals'

export default function Menu({
  menuItems = [],
  active = 0,
}: {
  menuItems: React.ReactNode[]
  active?: number
}) {
  const height = 48
  const gap = 8

  return (
    <div className='relative z-0 flex flex-col items-center justify-center gap-2'>
      <motion.div
        className='absolute top-0 -z-10 h-12 w-full rounded-lg bg-primary'
        animate={{ y: (height + gap) * active }}
      />
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={cn(
            'text z-10 flex h-12 w-full min-w-[3rem] items-center justify-center overflow-hidden bg-transparent transition-colors',
            active === index ? 'text-secondary' : 'text-foreground',
          )}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
