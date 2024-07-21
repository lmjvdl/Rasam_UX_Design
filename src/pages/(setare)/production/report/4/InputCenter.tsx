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
            placeholder='شماره خط'
            options={[
              { value: '1', label: 'خط 1' },
              { value: '2', label: 'خط 2' },
              { value: '3', label: 'خط 3' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_66.7%]'>
          <MultiSelect
            placeholder='انتخاب ایستگاه'
            options={[
              { value: '1', label: 'ضایعات پرس' },
              { value: '2', label: 'ضایعات درایر' },
              { value: '3', label: 'ضایعات لعاب' },
              { value: '4', label: 'ضایعات ورودی کوره' },
              { value: '5', label: 'ضایعات کوره' },
              { value: '6', label: 'ضایعات خروجی کوره' },
              { value: '7', label: 'ضایعات چمفر' },
            ]}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_33.3%]'>
          <NormalSelect
            placeholder='زیربازه'
            options={[
              { value: '1', label: 'یک ساعته' },
              { value: '2', label: '8 ساعته' },
              { value: '3', label: 'یک روزه ' },
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
