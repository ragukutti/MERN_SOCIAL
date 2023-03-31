import React,{useState} from 'react';
import {Button,Stack,TextareaAutosize,TextField,Typography,FormControl} from '@mui/material';
import axios from 'axios';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
   const [firstName,setFirstName] = useState("");
   const [lastName,setLastName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [profilePicture,setProfilePicture] = useState("");
   const [bio,setBio] = useState("");

   const navigate = useNavigate();

  const sign = async()=>{
      await axios.post('http://localhost:5001/auth/register' ,{
      firstName,
      lastName,
      email,
      password,
      profilePicture,
      bio
  });
}
    


  const submit = (event )=>{
     event.preventDefault();
    if(submit){
      navigate('/home')
    }
  }

  return (
    <Stack direction='column' spacing={2}
     sx={{display:'flex',
     alignItems:'center',
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
       onSubmit={submit}>
        <Typography variant='h4'>SignIn</Typography>
        
        
        <TextField variant='standard' 
        label='FirstName' 
        required
        size='small'  
        name='firstName'
        value={firstName}
        onChange={(e)=>{setFirstName(e.target.value)}}
        type='text' />
        
        <TextField variant='standard' 
        label='Lastaname' 
        required
        size='small'  
        name='lastName'
        value={lastName}
        onChange={(e)=>{setLastName(e.target.value)}}
        type='text' />
        
        <TextField variant='standard' 
        label='Email' 
        required
        size='small'  
        name='email'
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        type='text' />
        
        <TextField variant='standard' 
        label='Password' 
        required
        size='small'  
        name='password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        type='password' />

       <TextField variant='standard' 
        label='Picture Path' 
        size='small'  
        name='profilePicture'
        type='text' 
        value={profilePicture}
        onChange={(e)=>{setProfilePicture(e.target.value)}}
        /> 

      <TextareaAutosize variant='outlined' 
        sx={{border:'none',overFlowY:'clip'}}
        placeholder='write your bio'
        size='md'  
        name='bio'
        value={bio}
        onChange={(e)=>{setBio(e.target.value)}}
        type='' />
        
       <Button variant='contained' sx={{backgroundColor:'orange'}} onClick={sign}>SignUp</Button>
  </FormControl>
 </Stack>
  )
}

export default SignIn