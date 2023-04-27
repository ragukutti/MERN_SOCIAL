import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Photo = () => {
    
    const [photo,setPhoto] = useState([]);
  
    const { id }= useParams();
    
    useEffect(()=>{
     const photo = async()=>{       
        const res = await axios.get(`http://localhost:5001/post/${id}`)
      setPhoto([res.data])
      console.log(res.data)
     }
     photo();
    },[id]);    

  return (
    <div className='sm:grid grid-rows-2 grid-cols-3 sm:items-center md:grid grid-cols-3 ' >    
        {photo.map((data)=>(  
        <img alt='' src={data.postPicture}  key={data.id} className='  h-[300px] w-[300px] p-3' /> 
      
        ))}
      </div>
  )
}   

export default Photo