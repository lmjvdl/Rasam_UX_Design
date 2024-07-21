import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import cuttingImage from '@/images/icons/cutting.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'
import Report4 from './4'

const links = [
  { value: '1', label: 'گزارش توقفات دستگاه برش' },
  { value: '2', label: 'میزان جریان های مصرفی موتور های برش' },
  { value: '3', label: 'گزارش دمای موتور های دستگاه برش' },
  { value: '4', label: 'آمار ضایعات برش' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='برش' icon={cuttingImage}>
    <Routes>
      <Route index element={<Report0 />} />
      <Route path='1' element={<Report1 />} />
      <Route path='2' element={<Report2 />} />
      <Route path='3' element={<Report3 />} />
      <Route path='4' element={<Report4 />} />
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
