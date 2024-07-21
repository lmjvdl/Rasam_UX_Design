import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'

const allRequestedMaterials = [
  {
    index: 1,
    material: 'فریت',
    date: '1401/10/20',
    time: '8:00',
    amount: '1 کیلوگرم',
    code: '104',
  },
  {
    index: 2,
    material: 'کائولن',
    date: '1401/10/22',
    time: '19:00',
    amount: '2.54 کیلوگرم',
    code: '183',
  },
  {
    index: 3,
    material: 'TTP',
    date: '1401/10/23',
    time: '17:55',
    amount: '1.2 کیلوگرم',
    code: '215',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>ماده</TableHead>
          <TableHead>تاریخ</TableHead>
          <TableHead>ساعت درخواست</TableHead>
          <TableHead>میزان</TableHead>
          <TableHead>کد ماده</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allRequestedMaterials.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.material}</TableCell>
            <TableCell>{truck.date}</TableCell>
            <TableCell>{truck.time}</TableCell>
            <TableCell>{truck.amount}</TableCell>
            <TableCell>{truck.code}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
