import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Live from './live'
import Report from './report'

export default function BodyPrep() {
  return (
    <Routes>
      <Route index element={<Navigate to='live' replace />} />
      <Route path='live/*' element={<Live />} />
      <Route path='report/*' element={<Report />} />
      <Route path='*' element={<Navigate to='live' replace />} />
    </Routes>
  )
}
