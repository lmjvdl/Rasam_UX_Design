import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'

const allReturned = [
  {
    index: 1,
    date: '1401/11/10',
    time: '09:00',
    type: 'ورود',
    pattern: 'کویر',
    code: '105',
  },
  {
    index: 2,
    date: '1401/11/10',
    time: '08:30',
    type: 'خروجی',
    pattern: 'کویر',
    code: '223',
  },
  {
    index: 3,
    date: '1401/11/10',
    time: '08:00',
    type: 'خروجی',
    pattern: 'خلیج فارس',
    code: '781',
  },
  {
    index: 4,
    date: '1401/11/9',
    time: '08:50',
    type: 'ورودی',
    pattern: 'خلیج فارس',
    code: '835',
  },
  {
    index: 5,
    date: '1401/11/9',
    time: '09:17',
    type: 'ورودی',
    pattern: 'چوب',
    code: '361',
  },
  {
    index: 6,
    date: '1401/11/9',
    time: '09:46',
    type: 'خروجی',
    pattern: 'چوب',
    code: '649',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>تاریخ</TableHead>
          <TableHead>ساعت</TableHead>
          <TableHead>ورود / خروجی</TableHead>
          <TableHead>طرح</TableHead>
          <TableHead>کد پالت</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allReturned.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.date}</TableCell>
            <TableCell>{truck.time}</TableCell>
            <TableCell>{truck.type}</TableCell>
            <TableCell>{truck.pattern}</TableCell>
            <TableCell>{truck.code}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
