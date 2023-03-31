import React from 'react'
import CenterTop from '../CenterTop/CenterTop';
import Post from '../Post/Post';
import'./Center.css';

const Center = () => {
  return (
    <div className='centercontainer'>
      <CenterTop/>
       <Post/>
    </div>
  )
}
export default Center