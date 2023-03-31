import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'

const Search = () => {
  return (
    <div className='container'>
         <img alt='logo' src='https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657_960_720.png'/>
       <div className='content'>
         <input type='text' placeholder='Search'/>   
          <div className='icon'>
            <SearchIcon/>
          </div> 
      </div>
    </div>
  )
}

export default Search