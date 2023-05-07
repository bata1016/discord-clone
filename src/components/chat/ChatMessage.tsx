import React from 'react'
import './ChatMessage.scss'
import { Avatar } from '@mui/material'

function ChatMessage() {
  return (
    <div className='message'>
      <Avatar />
      <div className='message-info'>
        <h4>
          hiroaki.kawabata
          <span className='message-timestamp'>2023/05/07</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
    
  )
}

export default ChatMessage