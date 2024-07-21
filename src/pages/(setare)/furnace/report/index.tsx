import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import furnaceImage from '@/images/icons/furnace.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'
import Report4 from './4'
import Report5 from './5'

const links = [
  { value: '1', label: 'گزارش سیکل کوره' },
  { value: '2', label: 'گزارش موجودی سوبلکس' },
  { value: '3', label: 'گزارش متراژ پالت بارگیری' },
  { value: '4', label: 'گزارش دمایی موتور های کوره' },
  { value: '5', label: 'گزارش توقفات کوره' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='کوره' icon={furnaceImage}>
    <Routes>
      <Route index element={<Report0 />} />
      <Route path='1' element={<Report1 />} />
      <Route path='2' element={<Report2 />} />
      <Route path='3' element={<Report3 />} />
      <Route path='4' element={<Report4 />} />
      <Route path='5' element={<Report5 />} />
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
