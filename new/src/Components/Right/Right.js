import React from 'react'
import Top from '../Top/Top'
import Trending from '../Trending/Trending'
import './Right.css';
const Right = () => {
  return (
    <div className='rightcontiner'>
       <Top/>
       <Trending/>
    </div>
  )
}

export default Right