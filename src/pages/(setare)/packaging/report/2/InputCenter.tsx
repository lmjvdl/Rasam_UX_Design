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
          <MultiSelect
            placeholder='شماره خط'
            options={[
              { value: '1', label: 'خط 1' },
              { value: '2', label: 'خط 2' },
              { value: '3', label: 'خط 3' },
              { value: '4', label: 'خط 4' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_50%]'>
          <MultiSelect
            placeholder='شماره درجه'
            options={[
              { value: '1', label: 'درجه 1' },
              { value: '2', label: 'درجه 2' },
              { value: '3', label: 'درجه 3' },
              { value: '4', label: 'درجه 4' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_33.3%]'>
          <NormalSelect
            placeholder='زیربازه'
            options={[
              { value: '1', label: '8 ساعته' },
              { value: '2', label: '1 روزه' },
              { value: '3', label: '1 هفته' },
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
