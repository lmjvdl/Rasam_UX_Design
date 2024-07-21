import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import polishImage from '@/images/icons/polish.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'

const links = [
  { value: '1', label: 'گزارش توقفات دستگاه پولیش' },
  { value: '2', label: 'میزان جریان های مصرفی موتور های پولیش' },
  { value: '3', label: 'گزارش دمای موتور های پولیش' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='پولیش' icon={polishImage}>
    <Routes>
      <Route index element={<Report0 />} />
      <Route path='1' element={<Report1 />} />
      <Route path='2' element={<Report2 />} />
      <Route path='3' element={<Report3 />} />
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
