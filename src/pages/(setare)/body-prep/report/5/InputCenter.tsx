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
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_33.3%]'>
          <NormalSelect
            placeholder='نوع بالمیل'
            options={[
              { value: '1', label: 'بالمیل بچ' },
              { value: '2', label: 'بالمیل کانتینیوز' },
              { value: '3', label: 'بالمیل مدولار' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_66.7%]'>
          <MultiSelect
            placeholder='شماره بالمیل'
            options={[
              { value: '1', label: 'بالمیل 1' },
              { value: '2', label: 'بالمیل 2' },
              { value: '3', label: 'بالمیل 3' },
              { value: '4', label: 'بالمیل 4' },
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
              { value: '5', label: '1 ساعته' },
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
