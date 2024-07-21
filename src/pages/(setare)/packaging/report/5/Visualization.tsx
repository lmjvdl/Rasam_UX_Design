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
    startTime: '08:00',
    endTime: '09:00',
    duration: '60',
    eventType: 'هشدار',
    eventLocation: 'stacker',
    line: '5',
    description: 'plc',
  },
  {
    index: 2,
    startTime: '08:05',
    endTime: '08:10',
    duration: '5',
    eventType: 'توقف',
    eventLocation: 'stacker',
    line: '6',
    description: 'شکستن کاشی',
  },
  {
    index: 3,
    startTime: '14:00',
    endTime: '15:17',
    duration: '77',
    eventType: 'هشدار',
    eventLocation: 'packaging',
    line: '7',
    description: 'plc',
  },
  {
    index: 4,
    startTime: '20:00',
    endTime: '20:15',
    duration: '15',
    eventType: 'توقف',
    eventLocation: 'packaging',
    line: '8',
    description: 'اتمام چسب',
  },
  {
    index: 5,
    startTime: '21:00',
    endTime: '21:02',
    duration: '2',
    eventType: 'توقف',
    eventLocation: 'stacker',
    line: '5',
    description: 'شکستن کاشی',
  },
  {
    index: 6,
    startTime: '21:19',
    endTime: '21:27',
    duration: '8',
    eventType: 'توقف',
    eventLocation: 'packaging',
    line: '6',
    description: 'اتمام کارتن',
  },
  {
    index: 7,
    startTime: '23:00',
    endTime: '00:12',
    duration: '72',
    eventType: 'هشدار',
    eventLocation: 'stacker',
    line: '7',
    description: 'plc',
  },
  {
    index: 8,
    startTime: '01:00',
    endTime: '01:15',
    duration: '15',
    eventType: 'توقف',
    eventLocation: 'packaging',
    line: '8',
    description: 'اتمام کارتن',
  },
  {
    index: 9,
    startTime: '02:56',
    endTime: '02:49',
    duration: '3',
    eventType: 'توقف',
    eventLocation: 'packaging',
    line: '7',
    description: 'اتمام چسب',
  },
  {
    index: 10,
    startTime: '04:06',
    endTime: '04:20',
    duration: '14',
    eventType: 'توقف',
    eventLocation: 'stacker',
    line: '7',
    description: 'full',
  },
]

export default function Visualization() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>زمان شروع</TableHead>
          <TableHead>زمان پایان</TableHead>
          <TableHead>مدت زمان رویداد</TableHead>
          <TableHead>نوع رویداد</TableHead>
          <TableHead>محل رویداد</TableHead>
          <TableHead>خط</TableHead>
          <TableHead>توضیحات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allReturned.map(truck => (
          <TableRow key={truck.index}>
            <TableCell>{truck.index}</TableCell>
            <TableCell>{truck.startTime}</TableCell>
            <TableCell>{truck.endTime}</TableCell>
            <TableCell>{truck.duration}</TableCell>
            <TableCell>{truck.eventType}</TableCell>
            <TableCell>{truck.eventLocation}</TableCell>
            <TableCell>{truck.line}</TableCell>
            <TableCell>{truck.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
