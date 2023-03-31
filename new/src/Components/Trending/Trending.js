import React from 'react'
import'./Trending.css'

const Trending = () => {
  return (
    <div className='followcontainer'>
       <span >Trending For You</span>
           <div className='trending'>
            <span>#commedyking</span>
            <span>87k Shares</span>
            </div>

            <div className='trending'>
            <span>#malai </span>
            <span>90k Shares</span>
            </div>

            <div className='trending'>
            <span>#jallikattu</span>
            <span>1m Shares</span>
            </div>

            <div className='trending'>
            <span>#spersinger</span>
            <span>50k Shares</span>
            </div>
         </div>
 
  )
}

export default Trending