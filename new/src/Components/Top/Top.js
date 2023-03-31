
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './Top.css'

const Top = () => {
  return (
    <div className='righttop' >
        <HomeOutlinedIcon/>
         <SettingsOutlinedIcon/>
         <NotificationsNoneOutlinedIcon/>
         <EmailOutlinedIcon/>
    </div>
  )
}

export default Top