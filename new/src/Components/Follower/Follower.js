import React from 'react'
import  Members from '../Follower/FollowData';
import './Follower.css'

const Follower = () => {
  return (
    <div className='follower'>
      <span >Who is Following You</span>
      {Members.map((data)=>(
        <div key={data.id}  className='row'>
             <img alt=' ' src={data.image}/>
              <span>{data.Name}</span>
             <button>Follow</button>
        </div>    
      ))}
      
   </div> 
  )
}

export default Follower