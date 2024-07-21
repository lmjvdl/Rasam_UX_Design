import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'

const allTrucks = [
  {
    index: 1,
    licensePlate: '54 | 324 ب 12',
    soilType: 'خاک فلدسپات',
    date: '25 دی 1401',
    entryTime: '07:30',
    exitTime: '08:40',
    duration: '01:10',
  },
  {
    index: 2,
    licensePlate: '54 | 432 ب 15',
    soilType: 'خاک بنتونیت',
    date: '26 دی 1401',
    entryTime: '08:43',
    exitTime: '10:20',
    duration: '01:37',
  },
  {
    index: 3,
    licensePlate: '54 | 324 ب 12',
    soilType: 'خاک فلدسپات',
    date: '27 دی 1401',
    entryTime: '07:31',
    exitTime: '08:40',
    duration: '01:09',
  },
  {
    index: 4,
    licensePlate: '54 | 432 ب 15',
    soilType: 'خاک بنتونیت',
    date: '28 دی 1401',
    entryTime: '08:44',
    exitTime: '10:20',
    duration: '01:36',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>شماره پلاک</TableHead>
          <TableHead>نوع خاک</TableHead>
          <TableHead>تاریخ</TableHead>
          <TableHead>ساعت ورود</TableHead>
          <TableHead>ساعت خروج</TableHead>
          <TableHead>مدت زمان حضور</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allTrucks.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.licensePlate}</TableCell>
            <TableCell>{truck.soilType}</TableCell>
            <TableCell>{truck.date}</TableCell>
            <TableCell>{truck.entryTime}</TableCell>
            <TableCell>{truck.exitTime}</TableCell>
            <TableCell>{truck.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
