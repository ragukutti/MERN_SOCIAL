import React from 'react'
import Follower from '../Follower/Follower';
import ProfileCard from '../ProfileCard/ProfileCard';
import Search from '../Search/Search';
import './Left.css';

const Left = () => {
  return (
    <div className='Left'>
      <Search/>
      <ProfileCard/>
      <Follower/>
    
    </div>
  )
}

export default Left;