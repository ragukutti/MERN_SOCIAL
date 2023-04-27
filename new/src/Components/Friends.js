import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext';
import Follow from './Follow';

const Friends = () => {

  const {user} = useContext(AuthContext);


  const[frd,setFrd] = useState([]);

  useEffect(()=>{
    const frd = async ()=>{
      const rep = await axios.get(`http://localhost:5001/user/allfriends/${user._id}`)
      setFrd(rep.data)
    };
    frd();
  },[user]);
  
  return (
    <div className='hidden md:flex'>
      <div className='gap-2'>
        <h1 className=' flex font-bold text-xl  text-sky-800'>Friends</h1>
      {frd.map((data)=> <Follow  data={data}/>)} 
      </div>
    </div>
  )
}

export default Friends