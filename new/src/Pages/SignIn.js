import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const SignIn = () => {

   const navi = useNavigate();

   const [userName,setUserName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [profilePicture,setProfilePicture] = useState("");
   const [desc,setDesc] = useState("");

   const sign = async()=>{
      await axios.post('http://localhost:5001/auth/register' ,{
      userName,
      email,
      password,
      profilePicture,
      desc
  });
};



const submit = (event )=>{
    event.preventDefault();
    navi('/')
}

return (
    <div className='flex w-full h-screen items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 ' onSubmit={submit}>
     
      <div className='flex flex-col w-80 h-80 gap-3 items-center p-3 rounded-2xl shadow-2xl hover:shadow-[0_3px_5px_black] '>
        <h1 className='font-bold-bold text-4xl text-slate-200 gap-8'>SIGN</h1>

        <input placeholder='FullName' 
        className='w-90 rounded-md p-1 outline-none '
        value={userName}
        onChange={(e)=>{setUserName(e.target.value)}}
        name='userName'
        />
       
       <input placeholder='Email' 
        className='w-90 rounded-md p-1 outline-none '
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        name='email'
        />

       <input placeholder='Password' 
        className='w-90 rounded-md p-1 outline-none '
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        name='password'
        />

        <input placeholder='ProfilePic' 
        className='w-90 rounded-md p-1 outline-none '
        value={profilePicture}
        onChange={(e)=>{setProfilePicture(e.target.value)}}
        name='profilePicture'
        />

        <textarea placeholder='About You' 
        className='w-90 rounded-md p-1 outline-none scroll-none '
        value={desc}
        onChange={(e)=>{setDesc(e.target.value)}}
        name='desc'
        />

       <button className=' w-40 h-8 rounded-md font-bold text-md text-zinc-50  hover:text-gray-700' onClick={sign}>SUBMIT</button>
       
       </div> 
   </div>
  )
}  

export default SignIn