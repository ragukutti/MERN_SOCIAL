import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';

const Follow = ({data}) => {

const navi = useNavigate();
  
const{user} =useContext(AuthContext);
 
const[follwed,setFollwed] =useState()

const handleClick = async ()=>{
      if(follwed){
        await axios.put(`http://localhost:5001/user/unfollow/${user._id}`,{userId:data._id})
        setFollwed(!follwed)
      }else{
        await axios.put(`http://localhost:5001/user/follow/${user._id}`,{userId:data._id})
       }
    }

  return (
    <div>
         <div className='flex flex-row gap-2 ' key={data.id}>  
            <img alt='' src={data.profilePicture}  onClick={()=>navi(`/profile/${data._id}`)}
            className='w-[2.5rem] h-[2.5rem] rounded-3xl cursor-pointer'/>
            <h1 className=' justify-center text-lg font-bold'>{data.userName}</h1>
            <button className='flex ml-[1.5rem] bg-blue-500 h-[1.5rem] w-[3.5rem] rounded-md text-white justify-center '
             onClick={handleClick}>
               {follwed ? "unFollow" : "follow" }
            </button>
         </div>
    </div>
  )
}

export default Follow