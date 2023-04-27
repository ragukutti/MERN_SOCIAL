import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import { useNavigate } from  'react-router-dom'
const Login = () => {

  const navi = useNavigate();

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');

  const {dispatch} = useContext(AuthContext);

  const sub = async ()=>{
         dispatch({type:"LOGIN_START"})
           try{
          const res =  await axios.post('http://localhost:5001/auth/login',{email,password})
          dispatch({type:"LOGIN_SUCCESS", payload:res.data});
         }catch(err){
          dispatch({type:"LOGIN_FAIL",payload:err})
         }
    };
        
        
  const submit = (e)=>{
      e.preventDefault();
  };
      
   return (
   <div className='flex w-screen h-screen items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 ' onSubmit={submit}>
      <div className='flex flex-col w-80 h-80 gap-3 items-center p-3 rounded-2xl shadow-2xl hover:shadow-[0_3px_5px_black] '>
        <h1 className='font-bold-bold text-4xl text-slate-200 gap-8'>LOGIN</h1>
    
        <input placeholder='Email' 
        className='w-90 rounded-md p-1 outline-none '
        type='email'
        required
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        name='email'
        />

        <input placeholder='Password' 
        className='w-90 rounded-md p-1 outline-none '
        type='password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        name='password'
        />
        <button className=' w-40 h-8 rounded-md font-bold text-md text-zinc-50  hover:text-gray-700' onClick={sub}>SUBMIT</button>
        <h1 className='tex-lg text-black'>I dont have an account?</h1>
      

       <button 
        className=' w-40 h-8 rounded-md font-bold text-md text-zinc-50' 
        onClick={()=>navi('/sign')}
        >
          Sign up
        </button>
     </div> 
   </div>
        
  )
}

export default Login