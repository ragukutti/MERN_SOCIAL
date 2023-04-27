import React, { useContext } from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AuthContext } from '../Context/AuthContext';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  

const {user} = useContext(AuthContext);

const PF = process.env.REACT_APP_PUBLIC_FOLDER


const navi = useNavigate();

  return (
    <div className='w-full h-[50px] flex  bg-transparant justify-between items-center'>
      <div className='flex flex-row justify-center items-center'>
        <img alt=' ' className='flex w-[3rem] h-[3rem] p-1 rounded-full  items-center left-[2px] cursor-pointer' 
         src='https://png.pngtree.com/png-clipart/20190515/original/pngtree-facebook-social-media-icon-png-image_3572498.jpg'></img>
         <input placeholder='Search' type='text' className=' w-[300px] rounded-xl bg-gray-200 h-[30px] p-2 items-center outline-none'/>
         </div>
         <div className='flex flex-row justify-center items-center p-2 gap-2' >
             <NotificationsOutlinedIcon/>
             <ChatBubbleOutlineOutlinedIcon/>
             <SettingsOutlinedIcon/>
             <img className='flex  w-[3rem] h-[3rem] p-1 rounded-full  items-center justify-center left-[2px] cursor-pointer ' alt='/' 
             src= {user.profilePicture || PF + 'no-avatar.png'} onClick={()=> navi(`/profile/${user._id}`)} />
         </div>
    </div>

  )
}
    
export default Navbar