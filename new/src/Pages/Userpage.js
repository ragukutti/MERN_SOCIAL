import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import  noimg from '../Assets/no-avatar.png';   
import  noback from '../Assets/noback.webp';   
import Photo from '../Components/Photo';
import { AuthContext } from '../Context/AuthContext';
import {useNavigate} from 'react-router-dom'

const Userpage = () => {
  
 const [person,setPerson] = useState([]);

 const { id }= useParams();

 const {user} = useContext(AuthContext);

 const navi = useNavigate();


 useEffect(()=>{
  const data = async()=>{
    const res = await axios.get(`http://localhost:5001/user/${id}`)
    setPerson([res.data])
  }
 data(); 
 },[id,user])
   
 
  return (
    <>
    {person.map((data)=>(

     <div className='flex flex-col bg-gray-700  w-full   p-2' key={data.id} >
      <div className='flex flex-col  h-[500px]  bg-gray-600 items-center '>
         <img alt='' src={data.coverPicture || noback} 
         className='w-[800px] h-[350px] mt-[-3rem] ' />
      <button className='top-0 left-0 h-[2rem] w-[2rem] absolute  text-white m-5  font-bolt rounded-2xl bg-gray-700' onClick={()=>navi('/')}>X</button>

         <div className='flex flex-col items-center gap-2 md:ml-[-25rem] md:flex-row' >
           <img  alt=' ' src={data.profilePicture || noimg } 
             className=' w-[6rem] h-[6rem] rounded-full mt-[-2rem] relative  flex border-gray-700 border-4 md:w-[8rem] md:h-[8rem] '/>
           <h1 className=' font-bold text-3xl   '>{data.userName}</h1>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold text-white  '>Photos</h1>
        <br/>
          <Photo data={data}/> 
      </div>
    </div>
    ))}
  </>
  )
}

export default Userpage