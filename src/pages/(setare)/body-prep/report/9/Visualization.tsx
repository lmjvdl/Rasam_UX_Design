import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'

const allMaterials = [
  {
    index: 1,
    ballMillType: 'کف 1',
    startTime: '8:00 1402/10/23',
    endTime: '9:15 1402/10/23',
    duration: '07:26',
    stopDuration: '00:12',
    incomplete: 'شارژ کامل',
  },
  {
    index: 2,
    ballMillType: 'کف 2',
    startTime: '9:00 1402/10/23',
    endTime: '16:23 1402/10/23',
    duration: '08:12',
    stopDuration: '01:03',
    incomplete: 'شارژ کامل',
  },
  {
    index: 3,
    ballMillType: 'کف 1',
    startTime: '11:00 1402/10/23',
    endTime: '16:00 1402/10/21',
    duration: '07:53',
    stopDuration: '01:47',
    incomplete: 'شارژ ناقص',
  },
  {
    index: 4,
    ballMillType: 'دیوار 3',
    startTime: '9:00 1402/10/23',
    endTime: '12:00 1402/10/23',
    duration: '08:03',
    stopDuration: '00:34',
    incomplete: 'شارژ کامل',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>نوع بالمیل</TableHead>
          <TableHead>زمان شروع</TableHead>
          <TableHead>زمان پایان</TableHead>
          <TableHead>مدت زمان چرخش</TableHead>
          <TableHead>زمان توقف حین شارژ</TableHead>
          <TableHead>شارژ کامل/ناقص</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allMaterials.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.ballMillType}</TableCell>
            <TableCell>{truck.startTime}</TableCell>
            <TableCell>{truck.endTime}</TableCell>
            <TableCell>{truck.duration}</TableCell>
            <TableCell>{truck.stopDuration}</TableCell>
            <TableCell>{truck.incomplete}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
