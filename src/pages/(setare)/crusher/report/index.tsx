import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import crusherImage from '@/images/icons/crusher.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'
import Report4 from './4'
import Report5 from './5'

const links = [
  { value: '1', label: 'جدول گزارشات تردد ماشین' },
  { value: '2', label: 'جدول گزارشات میزان و نوع خاک ورودی سنگ شکن' },
  { value: '3', label: 'نمودار موجودی انبار خاک' },
  { value: '4', label: 'نمودار وزن خاک در سیلو های خروجی سنگ شکن' },
  { value: '5', label: 'نمودار توقفات سنگ شکن' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='سنگ شکن' icon={crusherImage}>
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
