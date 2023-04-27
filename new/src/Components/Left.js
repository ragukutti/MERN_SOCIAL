import React from 'react'
import Sidebar from './Sidebar'

const Left = () => {
  return (
    <div className=' flex-col p-2 gap-8 h-screen hidden md:flex '>
      <Sidebar/>
    </div>
  )
}

export default Left