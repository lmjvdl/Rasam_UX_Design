import React from 'react'
import Button from '@/components/ui/Button'
import CustomDatePicker from '@/components/ui/CustomDatePicker'
import { MultiSelect, NormalSelect } from '@/components/ui/Select'

export default function InputCenter() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className='flex flex-wrap'>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_100%] 2xl:flex-[0_0_100%]'>
          <MultiSelect
            placeholder='نوع بالمیل'
            options={[
              { value: '1', label: 'بچ 1' },
              { value: '2', label: 'بچ 2' },
              { value: '3', label: 'بچ 3' },
              { value: '4', label: 'کانتینیوز 1' },
              { value: '5', label: 'کانتینیوز 2' },
              { value: '6', label: 'کانتینیوز 3' },
              { value: '7', label: 'مدولار' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <NormalSelect
            placeholder='نوع ماده'
            options={[
              { value: '1', label: 'ماده 1' },
              { value: '2', label: 'ماده 2' },
              { value: '3', label: 'ماده 3' },
              { value: '4', label: 'ماده 4' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <NormalSelect
            placeholder='زیر بازه'
            options={[
              { value: '1', label: 'شیفت' },
              { value: '2', label: '1 روزه' },
              { value: '3', label: '1 هفته' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <CustomDatePicker />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <Button className='w-full'>جست و جو</Button>
        </div>
      </div>
    </form>
  )
}
