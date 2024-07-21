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
    ballMillType: 'مدولار',
    chargeType: 'آب',
    lastChargeTime: '20:00 1401/10/21',
    amount: '100 لیتر',
  },
  {
    index: 2,
    ballMillType: 'بچ 1',
    chargeType: 'خاک',
    lastChargeTime: '8:00 1401/10/22',
    amount: '140 کیلوگرم',
  },
  {
    index: 3,
    ballMillType: 'کانتینیوز 1',
    chargeType: 'روانساز',
    lastChargeTime: '8:15 1401/10/23',
    amount: '30 لیتر',
  },
  {
    index: 4,
    ballMillType: 'کانتینیوز 2',
    chargeType: 'گلوله آلوبیتی',
    lastChargeTime: '9:00 1401/10/23',
    amount: '3 بسته',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>بالمیل</TableHead>
          <TableHead>نوع شارژ</TableHead>
          <TableHead>آخرین ساعت شارژ</TableHead>
          <TableHead>میزان</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allMaterials.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.ballMillType}</TableCell>
            <TableCell>{truck.chargeType}</TableCell>
            <TableCell>{truck.lastChargeTime}</TableCell>
            <TableCell>{truck.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
