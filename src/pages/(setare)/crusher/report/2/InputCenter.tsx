import React from 'react'
import Button from '@/components/ui/Button'
import CustomDatePicker from '@/components/ui/CustomDatePicker'
import { MultiSelect } from '@/components/ui/Select'

export default function InputCenter() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className='flex flex-wrap'>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <MultiSelect
            placeholder='نوع سنگ شکن'
            options={[
              { value: '1', label: 'سنگ شکن فکی' },
              { value: '2', label: 'سنگ شکن چکشی' },
              { value: '3', label: 'سنگ شکن سانتریفیوژی' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <MultiSelect
            placeholder='نوع خاک'
            options={[
              { value: '1', label: 'فلدسپات' },
              { value: '2', label: 'کائولن' },
              { value: '3', label: 'بنتویت' },
              { value: '4', label: 'تالک' },
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
