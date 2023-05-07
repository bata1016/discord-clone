import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat-message'></div>
      <div className='chat-input'></div>
    </div>
  )
}

export default Chat