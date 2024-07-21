import React from 'react'
import Button from '@/components/ui/Button'
import CustomDatePicker from '@/components/ui/CustomDatePicker'
import { NormalSelect } from '@/components/ui/Select'

export default function InputCenter() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className='flex flex-wrap'>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <NormalSelect
            placeholder='نوع بالمیل'
            options={[
              { value: '1', label: 'بالمیل کف 1' },
              { value: '2', label: 'بالمیل کف 2' },
              { value: '3', label: 'بالمیل کف 3' },
              { value: '4', label: 'بالمیل کف 4' },
              { value: '5', label: 'بالمیل دیوار 1' },
              { value: '6', label: 'بالمیل دیوار 2' },
              { value: '7', label: 'بالمیل دیوار 3' },
              { value: '8', label: 'بالمیل دیوار 4' },
              // { value: '9', label: 'بالمیل دیوار 5' },
            ]}
          />
        </div>

        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_25%]'>
          <NormalSelect
            placeholder='زیربازه'
            options={[
              { value: '60', label: 'یک ساعته' },
              { value: '240', label: '4 ساعته' },
              { value: '480', label: '8 ساعته' },
              { value: '1440', label: 'یک روزه' },
              { value: '10080', label: 'یک هفته' },
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
