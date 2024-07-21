import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReportLayout from '@/components/ui/ReportLayout'
import glazingImage from '@/images/icons/glazing.webp'
import Report1 from './1'
import Report2 from './2'
import Report3 from './3'

const links = [
  { value: '1', label: 'گزارش سرعت دستگاه چاپ' },
  { value: '2', label: 'گزارش تعداد واگن تکمیل شده' },
  { value: '3', label: 'گزارش میزان توقفات خط لعاب' },
]

const Report = React.memo(() => (
  <ReportLayout links={links} label='خط لعاب' icon={glazingImage}>
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
