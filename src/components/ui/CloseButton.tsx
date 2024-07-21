import React from 'react'
import Button from './Button'
import { IconMenu2, IconX } from '@tabler/icons-react'

export default function CloseButton({
  closed = false,
  onClick,
}: {
  closed: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Button className='h-12 w-12 p-0' variant='ghost' onClick={onClick} aria-label='open or close menu'>
      {closed ? <IconMenu2 /> : <IconX />}
    </Button>
  )
}
