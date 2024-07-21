import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useFactoryStore } from '@/context/factoryStore'
import { factoryMap } from '@/utils/homeless/factoryMap'
import BackgroundImage from '@/components/ui/BackgroundImage'
import Shell from '@/components/ui/Shell'
import Test from '@/pages/test'

export default function App() {
  const factoryId = useFactoryStore(state => state.factoryId)
  const Factory = factoryMap[factoryId].root
  return (
    <>
      <Routes>
        <Route index element={<Navigate to='app' replace />} />
        <Route path='test' element={<Test />} />
        <Route
          path='app/*'
          element={
            <Shell>
              <Factory />
            </Shell>
          }
        />
        <Route path='*' element={<Navigate to='app' replace />} />
      </Routes>
      <BackgroundImage />
    </>
  )
}
