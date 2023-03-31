import React from 'react'
import Left from '../../Components/Left/Left';
import Center from '../../Components/Center/Center'
import Right from '../../Components/Right/Right';
import './Home.css'; 
const Home = () => {
  return (
    <div className='Home'>
      <Left/>
      <Center/>
      <Right/> 
       
    </div>
  )
}

export default Home