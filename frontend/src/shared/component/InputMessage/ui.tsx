import React from 'react'
import { ButtonFill } from '../ButtonFill'
import SendIcon from '@mui/icons-material/Send';
import './style.scss'

export const InputMessage = () => {
  return (
    <div className='inputMessage'>
      <input className='inputMessage__input' placeholder='Введите сообщение' />
      <ButtonFill className='inputMessage__btn'>
        <SendIcon />
      </ButtonFill>
    </div>
  )
}
