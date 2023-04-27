import React from 'react'
import Add from './Add'
import Post from './Post'

const Center = () => {
  return (
    <div className='flex flex-col items-center gap-4 w-full h-screen'>
      <Add />
      <Post />
    </div>
  )
}

export default Center