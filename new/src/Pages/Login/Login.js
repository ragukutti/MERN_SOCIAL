import { Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import { Login_call } from '../../ApiCall';

const Login = () => {


   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   const{dispatch} = useContext(AuthContext);
   
   const Submit = (e)=>{
    e.preventDefault();
    Login_call({email,password},dispatch);
  }
   
  return (
    <Stack direction='column' spacing={2}
     sx={{display:'flex',
     alignItems:'center',
     gap:'2rem',
     justifyContent:'center'
     ,padding:'5px',
     height:'100vh',
     }}>
       <FormControl  
       sx={{display:'flex',
       alignItems:'center',
       width:'300px',
       height:'auto',
       gap:'1rem',
       padding:'5px',
       boxShadow:'0 3px 5px gray',
       backgroundColor:'white',
       borderRadius:'10px',
      }}
       onSubmit={Submit}>
        
        <Typography variant='h4'>Login</Typography>
        
        <TextField 
        variant='standard' 
        type='email' 
        label='email' 
        required
        size='small'  
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        
        <TextField
        variant='standard' 
        type='password' 
        label='password' 
        required
        size='small'  
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        
        <Button type='submit' variant='contained' sx={{backgroundColor:'orange'}}>Login</Button>
        <Typography>I don't have an account?</Typography>
        <Button sx={{mt:'-1rem'}}>Singup</Button>
       
        </FormControl>
      </Stack>  
        
  )
}

export default Login