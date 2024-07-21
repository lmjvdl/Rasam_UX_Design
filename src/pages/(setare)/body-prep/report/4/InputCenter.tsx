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
            placeholder='شماره سیلو'
            options={[
              { value: '1', label: 'سیلو کف 1' },
              { value: '2', label: 'سیلو کف 2' },
              { value: '3', label: 'سیلو کف 3' },
              { value: '4', label: 'سیلو کف 4' },
              { value: '5', label: 'سیلو دیوار 1' },
              { value: '6', label: 'سیلو دیوار 2' },
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
