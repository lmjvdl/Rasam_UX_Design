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
    material: 'لعاب A',
    date: '1401/10/20',
    time: '8:00',
    amount: '80 کیلوگرم',
    code: '104',
  },
  {
    index: 2,
    material: 'انگوب B',
    date: '1401/10/20',
    time: '17:00',
    amount: '140 کیلوگرم',
    code: '181',
  },
  {
    index: 3,
    material: 'انگوب C',
    date: '1401/10/15',
    time: '7:45',
    amount: '110 کیلوگرم',
    code: '243',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>نام لعاب</TableHead>
          <TableHead>کد</TableHead>
          <TableHead>میزان تولید شده</TableHead>
          <TableHead>تاریخ</TableHead>
          <TableHead>آخرین ساعت برگشتی</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allReturned.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.material}</TableCell>
            <TableCell>{truck.code}</TableCell>
            <TableCell>{truck.amount}</TableCell>
            <TableCell>{truck.date}</TableCell>
            <TableCell>{truck.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
