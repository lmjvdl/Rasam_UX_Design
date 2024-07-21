import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import productionImage from '@/images/icons/production.webp'
import Report1 from './1'

const links = [{ value: '1', label: 'جدول مشخصات پالت ها' }]

const Report = React.memo(() => (
  <ReportLayout links={links} label='تولید' icon={productionImage}>
    <Routes>
      <Route index element={<Report0 />} />
      <Route path='1' element={<Report1 />} />
    </Routes>
  </ReportLayout>
))

Report.displayName = 'Report'
export default Report

function Report0() {
  return (
    <ReportLayout.Page
      InputCenter='برای دیدن ورودی ها ابتدا یک نوع گزارش را انتخاب نمایید'
      Visualization=''
    />
  )
}
