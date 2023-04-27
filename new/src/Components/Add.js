import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import axios from 'axios'

const Add = () => {
 
  const {user} = useContext(AuthContext)
  const [file,setFile] = useState(null);
  const [desc,setDesc] = useState("");
   
  const handleSubmit = async (e)=>{
      e.prventDefault();
      const newPost = {
        userId: user._id,
        desc,
      };

      if (file) {
        const data = new FormData();
        const fileName = new Date() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        newPost.postPicture = fileName;
        console.log(fileName)
  
        try{
           await axios.post('http://localhost:5001/upload',data);
        }catch(err){
          console.log(err)
        }
      }
      console.log(newPost)

      try{
        await axios.post(`http://localhost:5001/post/create`,{newPost});
        window.location.reload();
      }catch(err){
        console.log(err)
      }
};

  return (
    <div className='flex flex-row items-center gap-10 rounded-xl w-[500px] h-auto shadow-xl p-5'>
      <div className='flex flex-col gap-2'>
         <div className='flex flex-row items-center gap-2'>
          <img alt='/' src={user.prodescPicture || 'https://www.w3schools.com/howto/img_avatar.png'}  
          className='w-[3rem] h-[3rem] rounded-xl ' />
          <input placeholder='Whats new...' 
          className='outline-none w-[400px] p-2 h-[30px] bg-gray-200 items-center rounded-lg'
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}/>
         </div>
         <hr className='text-white w-[450px] justify-center'/>
          { file && (<div className=' flex  max-w-[500px] flex-col'>
            <button className='font-bold  flex  right-0 ml-[auto] w-[2rem] h-[1.5rem] rounded-md  justify-center text-sky-500 ' onClick={()=>setFile(null)}> X</button>  
            <img alt=' w-full ' src={URL.createObjectURL(file)} />
           </div>)}
         <form className='flex flex-row justify-center gap-10' onSubmit={handleSubmit} >
           <label  className='w-[3rem] rounded-md h-[2rem] justify-center p-1 cursor-pointer flex ' htmlFor="input"  >
            <LocalSeeOutlinedIcon htmlColor='blue'/>
            Photo
           </label>
           <input type='file' id="input" name='file' accept='.png,.jpg,.jpeg' onChange={(e)=>setFile(e.target.files[0])}   
           className='hidden'/>
           <button type='submit'  className='w-[3rem] rounded-md h-[2rem] justify-center p-1 bg-blue-200'> Share</button>    
        </form>
      </div>            
       
    </div>
  )
}

export default Add