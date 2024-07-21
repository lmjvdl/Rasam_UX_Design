import React from 'react'
import ReportLayout from '@/components/ui/ReportLayout'
import InputCenter from './InputCenter'
import Visualization from './Visualization'

export default function Report4() {
  return (
    <ReportLayout.Page
      InputCenter={<InputCenter />}
      Visualization={<Visualization />}
    />
  )
}
