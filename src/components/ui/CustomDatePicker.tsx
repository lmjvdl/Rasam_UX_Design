import React from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import weekends from 'react-multi-date-picker/plugins/highlight_weekends'
import { IconCalendarTime } from '@tabler/icons-react'
import useScreen from '@/hooks/ui/useScreen'
import { Input } from './input'

const persianFa = {
  name: 'persian_fa',
  months: [
    ['فروردین', 'فر'],
    ['اردیبهشت', 'ار'],
    ['خرداد', 'خرد'],
    ['تیر', 'تیر'],
    ['مرداد', 'مر'],
    ['شهریور', 'شه'],
    ['مهر', 'مه'],
    ['آبان', 'آبا'],
    ['آذر', 'آذ'],
    ['دی', 'دی'],
    ['بهمن', 'بهم'],
    ['اسفند', 'اسف'],
  ],
  weekDays: [
    ['شنبه', 'شن'],
    ['یکشنبه', 'یک'],
    ['دوشنبه', 'دو'],
    ['سه شنبه', 'سه'],
    ['چهارشنبه', 'چهار'],
    ['پنجشنبه', 'پنج'],
    ['جمعه', 'جم'],
  ],
  digits: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
  meridiems: [
    ['قبل از ظهر', 'ق.ظ'],
    ['بعد از ظهر', 'ب.ظ'],
  ],
}
const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']

interface CustomDatePickerProps {
  value?: DateObject[]
  onChange?: (selectedDates: DateObject[]) => void
}

export default function CustomDatePicker({
  value,
  onChange,
}: CustomDatePickerProps) {
  const { isMobile } = useScreen()

  return (
    <DatePicker
      className={isMobile ? 'rmdp-mobile' : ''}
      containerClassName='w-full'
      render={<InputContainer />}
      range
      dateSeparator=' '
      calendar={persian}
      locale={persianFa}
      weekDays={weekDays}
      calendarPosition='bottom-center'
      value={value}
      onChange={onChange}
      plugins={[weekends()]}
      shadow={false}
      portal
    />
  )
}

interface CalendarInputProps {
  value?: string | string[]
  onFocus?: () => void
}
function InputContainer({ onFocus, value }: CalendarInputProps) {
  const text = valueFormatter(value)
  return (
    <Input
      type='text'
      dir='rtl'
      placeholder='بازه زمانی'
      aria-label='بازه زمانی'
      inputIcon={<IconCalendarTime />}
      className='cursor-pointer'
      onFocus={onFocus}
      value={text}
      readOnly
    />
  )
}

function valueFormatter(rawValue?: string | string[]) {
  if (!rawValue) return ''

  let value: string[] = []

  if (typeof rawValue === 'string') {
    value = rawValue.split(' ')
  } else {
    value = rawValue
  }

  if (value.length === 1) {
    const [from] = value
    if (from === '') return ''
    return `${from}  تا این لحظه`
  }

  if (value.length === 2) {
    const [from, to] = value
    if (from === '' || to === '') return ''

    return `${from} تا ${to}`
  }

  return ''
}
