import React from 'react'
import welcomeImage from '@/images/background/0.webp'
import setareImage from '@/images/background/1.webp'
import { useFactoryStore } from '@/context/factoryStore'

const imageMap = [welcomeImage, setareImage]

export default function BackgroundImage() {
  const factoryId = useFactoryStore(state => state.factoryId)
  return (
    <div
      className='fixed inset-0 -z-50 h-screen scale-105 bg-cover bg-center bg-no-repeat blur-md filter dark:blur-lg'
      style={{
        backgroundImage: `url("${imageMap[factoryId]}")`,
      }}
    />
  )
}
