import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios';
import Feed from './Feed';
const Post = () => {
  
 const {user} = useContext(AuthContext);

 const [post,setPost] = useState([])

 useEffect(()=>{
  const data = async ()=>{
    const res = await axios.get(`http://localhost:5001/post/feed/${user._id}`)
    setPost(res.data)
  }
 data();
 },[user]);
 
 return (
    <div>
    {post.map((post)=>(

    <Feed key={post.id} post={post}/>
    ))}
    </div>
  )
}

export default Post