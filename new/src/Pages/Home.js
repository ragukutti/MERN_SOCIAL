import React from 'react'
import Left from '../Components/Left'
import Center from '../Components/Center'
import Friends from '../Components/Friends'
import Navbar from '../Components/Navbar'

const Home = () => {
return (
  <>
   <Navbar/>
  <div className='  flex flex-col h-screen w-full ' >
          <div className='flex gap-2'>
                <div className=' w-[20%] h-screen '>
                  <Left/> 
                </div>
                <div className=' w-[60%] h-screen '>
                  <Center />
                </div>
                <div className='w-[20%] h-screen'>
                  <Friends/>
                </div>
          </div>
      </div>
  </>
  )
}

export default Home