import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat-message'></div>
      <div className='chat-input'>
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder='#Udemyへメッセージを送信'/>
          <button type='submit' className='chat-input-button'>送信</button>
        </form>
        <div className='chat-input-icons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat