import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import bodyPrepImage from '@/images/icons/body-prep.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'
import Report4 from './4'
import Report5 from './5'
import Report6 from './6'
import Report7 from './7'
import Report8 from './8'
import Report9 from './9'
import Report10 from './10'

const links = [
  // { value: '1', label: 'گزارش مصرف مواد' },
  // { value: '2', label: 'نمودار گزارش مصرف مواد در بالمیل' },
  // { value: '3', label: 'نمودار گزارش نرخ تولید خاک' },
  // { value: '4', label: 'نمودار گزارش موجودی سیلو های گرانول' },
  { value: '5', label: 'جریان مصرفی بالمیل ها' },
  { value: '6', label: 'مدت زمان چرخش بالمیل' },
  { value: '7', label: 'مدت زمان چرخش بالمیل ها در پیک برق' },
  { value: '8', label: 'مدت زمان شارژ هر بالمیل' },
  { value: '9', label: 'جدول مدت زمان شارژ بالمیل ها' },
  { value: '10', label: 'تعداد شارژ بالمیل در روز' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='تهیه بدنه' icon={bodyPrepImage}>
    <Routes>
      <Route index element={<Report0 />} />
      <Route path='1' element={<Report1 />} />
      <Route path='2' element={<Report2 />} />
      <Route path='3' element={<Report3 />} />
      <Route path='4' element={<Report4 />} />
      <Route path='5' element={<Report5 />} />
      <Route path='6' element={<Report6 />} />
      <Route path='7' element={<Report7 />} />
      <Route path='8' element={<Report8 />} />
      <Route path='9' element={<Report9 />} />
      <Route path='10' element={<Report10 />} />
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
