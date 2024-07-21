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
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_50%]'>
          <NormalSelect
            placeholder='شماره دستگاه'
            options={[
              { value: '1', label: 'دستگاه 1' },
              { value: '2', label: 'دستگاه 2' },
              { value: '3', label: 'دستگاه 3' },
              { value: '4', label: 'دستگاه 4' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_50%]'>
          <MultiSelect
            placeholder='شماره موتور'
            options={[
              { value: '1', label: 'موتور 1' },
              { value: '2', label: 'موتور 2' },
              { value: '3', label: 'موتور 3' },
              { value: '4', label: 'موتور 4' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_33.3%]'>
          <NormalSelect
            placeholder='زیربازه'
            options={[
              { value: '1', label: '1 دقیقه' },
              { value: '2', label: '5 دقیقه' },
              { value: '3', label: '15 دقیقه' },
              { value: '4', label: '30 دقیقه' },
              { value: '5', label: 'یک ساعته' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_33.3%]'>
          <CustomDatePicker />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_33.3%]'>
          <Button className='w-full'>جست و جو</Button>
        </div>
      </div>
    </form>
  )
}
