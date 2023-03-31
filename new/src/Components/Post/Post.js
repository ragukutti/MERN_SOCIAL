
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Post.css';

const Post = () => {
    const post =[{
        id:0,
        image:'https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        likes:7782
    },{
        id:1,
        image:'https://images.pexels.com/photos/1095817/pexels-photo-1095817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        likes:85904
    },
    {
        id:3,
        image:'https://images.pexels.com/photos/1095817/pexels-photo-1095817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        likes:85904
    }
];
   
  return (
    <div className='postcontainer'>
        {post.map((data)=>(
        <div key={data.id} className='content'>
          <img alt='' src={data.image}/>
          <div className='icon'>
             <FavoriteBorderOutlinedIcon/>
             <EmailOutlinedIcon/>
             <SendOutlinedIcon/>
           </div>
            <span>{data.likes}Likes</span>
        </div>
        ))}
    </div>
  )
}

export default Post