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
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <MultiSelect
            placeholder='انتخاب کوره'
            options={[
              { value: '1', label: 'کوره 1' },
              { value: '2', label: 'کوره 2' },
              { value: '3', label: 'کوره 3' },
              { value: '4', label: 'کوره 4' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <NormalSelect
            placeholder='زیربازه'
            options={[
              { value: '1', label: '1 دقیقه' },
              { value: '2', label: '5 دقیقه' },
              { value: '3', label: '1 ساعته' },
              { value: '4', label: 'شیفت' },
              { value: '5', label: '1 روزه' },
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
