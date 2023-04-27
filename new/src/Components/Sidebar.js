import React from 'react'
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
const Sidebar = () => {
  return (
    <div className='flex flex-col w-[200px] h-[300px]  rounded-xl p-4 gap-6  '>
      <div className='flex flex-row gap-2 text-xl items-center hover:text-sky-500 cursor-pointer'>
        <FoundationOutlinedIcon/>
        <h1>Home</h1>
      </div>
      <div className='flex flex-row gap-2 text-xl items-center hover:text-sky-500  cursor-pointer hover:border-b-sky-500'>
        <YardOutlinedIcon/>
        <h1>Photos</h1>
      </div>

      <div className='flex flex-row gap-2 text-xl items-center hover:text-sky-500 cursor-pointer'>
        <AccountCircleOutlinedIcon/>
        <h1>People</h1>
      </div>

      <div className='flex flex-row gap-2 text-xl items-center hover:text-sky-500 cursor-pointer'>
        <PermIdentityOutlinedIcon/>
        <h1>Profile</h1>
      </div>

      <div className='flex flex-row gap-2 text-xl items-center hover:text-sky-500 cursor-pointer'>
        <SettingsOutlinedIcon/>
        <h1>Setting</h1>
      </div>
      
    </div>
  )
}

export default Sidebar