import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { SidebarChannel } from './SidebarChannel';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className='sidebar-left'>
        <div className='server-icon'>
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className='server-icon'>
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className='sidebar-right'>
        <div className='sidebar-top'>
          <h3>discord</h3>
          <ExpandMoreIcon/>
        </div>
        <div className='sidebar-channels'>
          <div className='sidebar-channels-header'>
            <div className='sidebar-header'>
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebar-add-icon' />
          </div>
          <div className='sidebar-channel-list'>
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
          <div className='sidebar-footer'>
            <div className='sidebar-account'>
              <img src="./icon.png" alt="" />
              <div className='account-name'>
                <h4>hiroaki.kawabata</h4>
                <span>#88888</span>
              </div>
            </div>
            <div className='sidebar-voice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
