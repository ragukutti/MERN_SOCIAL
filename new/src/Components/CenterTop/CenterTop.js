import React from 'react'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import './CenterTop.css';

const Top = () => {
  return (
       <div className='top'>
        <div>
        <div className='row'>
           <img alt='' src='https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=600'/>
           <input type='text' placeholder='#Explore'/>
        </div>
          <div className='icon'>
            <div className='option'>
              <LocalSeeOutlinedIcon/>
              Photo
            </div>
            <div className='option'>
              <LocationOnOutlinedIcon/>
              Location
            </div>
            <div className='option'>
              <PlayCircleOutlineOutlinedIcon/>
              Video
            </div>
            <div className='option'>
              <CalendarMonthOutlinedIcon/>
              Shedule
            </div>
          </div>
      </div>
        </div>
    )
}

export default Top