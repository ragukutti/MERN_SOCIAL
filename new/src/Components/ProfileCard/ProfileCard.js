import React from  'react';
import './ProfileCard.css';
import {Button} from'@mui/material';


const ProfileCard = () => {

return (
    <div className='card'>
      <div className='image'>
        <img  alt='' src='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <img alt='' src='https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        </div>
        <div className='name'>
        <span>Celina</span>
        <span>FullStack Devloper</span>
        </div>
        {/* follow */}
        <div className='followstatus'> 
           <div className='follow'>
            <span>4500</span>
            <span>Followers</span>
           </div>

          <div className='follow'>
            <span>1</span>
             <span>Follow</span>
          </div>
          </div>
          <Button variant='text' sx={{color:'orange'}}>My Profile</Button>
    </div>
  )
}

export default ProfileCard