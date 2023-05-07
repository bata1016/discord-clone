import React from 'react'
import './ChatHeader.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

function ChatHeader() {
  return (
    <div className='chat-header'>
      <div className='chat-header-left'>
        <h3>
          <span className='chat-header-hash'>#</span>
          Udemy
        </h3>
      </div>
      <div className='chat-header-right'>
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleIcon />
        <div className='chat-header-serach'>
          <input type="text" placeholder='検索' />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  )
}

export default ChatHeader