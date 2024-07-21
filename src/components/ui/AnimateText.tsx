import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimateTextProps {
  children: string | number
}

export default function AnimateText({ children }: AnimateTextProps) {
  const [initialRender, setInitialRender] = React.useState<boolean>(true)
  const currentRef = React.useRef<HTMLParagraphElement>(null)
  const widthRef = React.useRef<number | string>('auto')
  const heightRef = React.useRef<number | string>('auto')

  React.useEffect(() => {
    setInitialRender(false)
  }, [])

  React.useEffect(() => {
    const element = currentRef.current
    if (!element) return

    const { width, height } = element.getBoundingClientRect()

    heightRef.current = height
    widthRef.current = width
  }, [children, currentRef, heightRef, widthRef])
  return (
    <div
      className='relative'
      style={
        initialRender
          ? {}
          : { width: widthRef.current, height: heightRef.current }
      }
    >
      <AnimatePresence>
        <motion.p
          key={children}
          className='left-0 top-0 whitespace-nowrap'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: initialRender ? 'static' : 'absolute',
          }}
          ref={currentRef}
        >
          {children}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
