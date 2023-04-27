import React, {useContext, useEffect, useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import dayjs from 'dayjs'
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

const Feed = ({post}) => {


 const {user} =useContext(AuthContext);

  const [person,setPerson] = useState([])
  const [isliked,setIsLiked] = useState(false)

  useEffect(() => {
    setIsLiked(post.likes.includes(user._id));
  }, [user._id,post.likes]);

  const likes = ()=>{
    try{
     axios.put(`http://localhost:5001/post/${post._id}/like`,{userId:user._id});
     setIsLiked(!isliked)
   }catch(err){
      console.log(err)
    }
  }
 
  useEffect(()=>{
   const data = async ()=>{
     const res = await axios.get(`http://localhost:5001/user/${post.userId}`)
     setPerson(res.data)
   }
  data();
  },[post.userId]);
  return (
    <div>
   <div className='flex flex-col p-5 gap-5 shadow-xl w-[500px] h-[450px]  '  >
     <div className='flex flex-row justify-between gap-80'>
         <div className='flex flex-row gap-2  '>
           <img alt='' src={person.profilePicture  } className='w-[2rem] h-[2rem] rounded-xl '/>
           <h1 className='flex text-xl font-bold text-black'>{person.userName}</h1>
        </div>
        <button className='justify-center '>...</button>
      </div>
      <div>
        <span  className=' text-md mt-[-3rem]'>{dayjs(post.createdAt).format('DD/MM/YYYY')}</span>     
      </div>
       <img alt=''
       className='w-full rounded-sm h-[250px]' 
       src={post.postPicture} />
       <div className='flex flex-row gap-2 '>
        {isliked ? <FavoriteIcon onClick={likes}  /> : <FavoriteBorderOutlinedIcon onClick={likes} />  } 
           <ChatBubbleOutlineOutlinedIcon />
           <SendOutlinedIcon/>
     </div>
    </div>
 </div>
  )
}

export default Feed