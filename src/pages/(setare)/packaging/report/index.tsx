import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import packagingImage from '@/images/icons/packaging.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'
import Report4 from './4'
import Report5 from './5'

const links = [
  { value: '1', label: 'نمودار مدت زمان توقف' },
  { value: '2', label: 'نمودار داده تجمعی' },
  { value: '3', label: 'نمودار تولید روزانه' },
  { value: '4', label: 'نمودار خطا و توقف' },
  { value: '5', label: 'جدول خطا و توقف' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='بسته بندی' icon={packagingImage}>
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
