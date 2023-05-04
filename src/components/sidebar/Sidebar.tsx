import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className='sidebar-left'>
        <div className='server-icon'>
          <img src="./logo192.png" alt="" />
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

          </div>
        </div>
      </div>
    </div>
  )
}
