import React from 'react'
import Button from '@/components/ui/Button'
import CustomDatePicker from '@/components/ui/CustomDatePicker'
import { MultiSelect, NormalSelect, SelectItem } from '@/components/ui/Select'

export default function InputCenter() {
  const [deviceIdGroup, setDeviceIdGroup] = React.useState<SelectItem[]>([
    { value: '1', label: 'بالمیل کف' },
  ])
  const [deviceIds, setDeviceIds] = React.useState<SelectItem[]>([
    { value: '1', label: 'بالمیل کف 1' },
    { value: '2', label: 'بالمیل کف 2' },
    { value: '3', label: 'بالمیل کف 3' },
    { value: '4', label: 'بالمیل کف 4' },
  ])
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
              { value: '1', label: 'بالمیل کف' },
              { value: '2', label: 'بالمیل دیوار' },
            ]}
            value={deviceIdGroup}
            onChange={newItem => {
              if (!newItem) return
              if (newItem.value === '1')
                setDeviceIds([
                  { value: '1', label: 'بالمیل کف 1' },
                  { value: '2', label: 'بالمیل کف 2' },
                  { value: '3', label: 'بالمیل کف 3' },
                  { value: '4', label: 'بالمیل کف 4' },
                ])
              if (newItem.value === '2')
                setDeviceIds([
                  { value: '5', label: 'بالمیل دیوار 1' },
                  { value: '6', label: 'بالمیل دیوار 2' },
                  { value: '7', label: 'بالمیل دیوار 3' },
                  { value: '8', label: 'بالمیل دیوار 4' },
                  { value: '9', label: 'بالمیل دیوار 5' },
                ])
              setDeviceIdGroup([newItem])
            }}
          />
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_66.7%]'>
          {deviceIdGroup.at(0)?.value === '1' ? (
            <MultiSelect
              options={[
                { value: '1', label: 'بالمیل کف 1' },
                { value: '2', label: 'بالمیل کف 2' },
                { value: '3', label: 'بالمیل کف 3' },
                { value: '4', label: 'بالمیل کف 4' },
              ]}
              value={deviceIds}
              onChange={newItems => {
                if (!newItems) return
                setDeviceIds(newItems as SelectItem[])
              }}
            />
          ) : deviceIdGroup.at(0)?.value === '2' ? (
            <MultiSelect
              options={[
                { value: '5', label: 'بالمیل دیوار 1' },
                { value: '6', label: 'بالمیل دیوار 2' },
                { value: '7', label: 'بالمیل دیوار 3' },
                { value: '8', label: 'بالمیل دیوار 4' },
                { value: '9', label: 'بالمیل دیوار 5' },
              ]}
              value={deviceIds}
              onChange={newItems => {
                if (!newItems) return
                setDeviceIds(newItems as SelectItem[])
              }}
            />
          ) : null}
        </div>
        <div className='flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] 2xl:flex-[0_0_33.3%]'>
          <NormalSelect
            placeholder='نوع شارژ'
            options={[
              { value: '1', label: 'شارژ کامل' },
              { value: '2', label: 'شارژ ناقص' },
              { value: '3', label: 'همه شارژ ها' },
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
