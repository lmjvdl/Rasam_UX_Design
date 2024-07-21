import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'

const allCrushers = [
  {
    index: 1,
    date: '1401/10/20',
    crusherType: 'سنگ شکن فکی',
    entryTime: '8:40',
    soilType: 'فلدسپات',
    soilAmount: '4416 کیلوگرم',
  },
  {
    index: 2,
    date: '1401/10/21',
    crusherType: 'سنگ شکن چکشی',
    entryTime: '8:48',
    soilType: 'کائولن',
    soilAmount: '4518 کیلوگرم',
  },
  {
    index: 3,
    date: '1401/10/23',
    crusherType: 'سنگ شکن چکشی',
    entryTime: '7:32',
    soilType: 'تالک',
    soilAmount: '4613 کیلوگرم',
  },
  {
    index: 4,
    date: '1401/10/26',
    crusherType: 'سنگ شکن چکشی',
    entryTime: '9:54',
    soilType: 'بنتویت',
    soilAmount: '4281 کیلوگرم',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>تاریخ</TableHead>
          <TableHead>نوع سنگ شکن</TableHead>
          <TableHead>ساعت شروع</TableHead>
          <TableHead>نوع خاک</TableHead>
          <TableHead>میزان خاک</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allCrushers.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.date}</TableCell>
            <TableCell>{truck.crusherType}</TableCell>
            <TableCell>{truck.entryTime}</TableCell>
            <TableCell>{truck.soilType}</TableCell>
            <TableCell>{truck.soilAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
