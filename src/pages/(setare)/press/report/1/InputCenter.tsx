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
            placeholder='شماره پرس'
            options={[
              { value: '1', label: 'پرس 1' },
              { value: '2', label: 'پرس 2' },
              { value: '3', label: 'پرس 3' },
              { value: '4', label: 'پرس 4' },
              { value: '5', label: 'پرس 5' },
              { value: '6', label: 'پرس 6' },
              { value: '7', label: 'پرس 7' },
              { value: '8', label: 'پرس 8' },
              { value: '9', label: 'پرس 9' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <NormalSelect
            placeholder='زیربازه'
            options={[
              { value: '1', label: '1 ساعته' },
              { value: '2', label: 'شیفت' },
              { value: '3', label: '1 روزه' },
              { value: '4', label: '1 هفته' },
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
