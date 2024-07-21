import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'
import truckImage from '@/images/icons/truck.webp'

const allTrucks = [
  {
    licensePlate: '54 | 324 ب 12',
    entryTime: '07:33:46',
    duration: '02:30:00',
    cargoType: 'خاک بنتونیت',
  },
  {
    licensePlate: '54 | 789 ج 56',
    entryTime: '10:44:19',
    duration: '01:55:46',
    cargoType: 'خاک کائولن',
  },
  {
    licensePlate: '54 | 769 ج 56',
    entryTime: '11:44:38',
    duration: '00:55:15',
    cargoType: 'خاک فلدسپات',
  },
  {
    licensePlate: '54 | 344 ب 12',
    entryTime: '13:33:46',
    duration: '02:49:18',
    cargoType: 'خاک کائولن',
  },
]

export default function Trucks() {
  return (
    <div // trucks live root
    >
      <header // trucks main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // trucks image
          src={truckImage}
          alt='کامیون'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>ماشین های موجود در سایت</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>شماره پلاک</TableHead>
              <TableHead>ساعت ورود</TableHead>
              <TableHead>مدت زمان حضور</TableHead>
              <TableHead>نوع محموله</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allTrucks.map(truck => (
              <TableRow key={truck.licensePlate}>
                <TableCell>{truck.licensePlate}</TableCell>
                <TableCell>{truck.entryTime}</TableCell>
                <TableCell>{truck.duration}</TableCell>
                <TableCell>{truck.cargoType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}
