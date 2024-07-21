import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import mucilageImage from '@/images/icons/mucilage.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'
import Report4 from './4'
import Report5 from './5'

const links = [
  { value: '1', label: 'جدول میزان و نوع مواد درخواستی از انبار' },
  { value: '2', label: 'جدول گزارشات میزان تولیدی لعاب' },
  { value: '3', label: 'جدول گزارشات میزان لعاب ارسالی به خطوط لعاب' },
  { value: '4', label: 'جدول گزارشات میزان لعاب برگشتی' },
  { value: '5', label: 'نمودار گزارش میزان موجودی مخازن لعاب و انگوب' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='لعاب سازی' icon={mucilageImage}>
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
