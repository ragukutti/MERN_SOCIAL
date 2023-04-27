const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authrouter = require('./Router/auth');
const userrouter = require('./Router/user');
const postrouter = require('./Router/post');
const multer = require('multer');
const path = require('path')
const port = process.env.PORT || 5001 ;  
const app = express();


//config
app.use(express.json());  
app.use(cors());
dotenv.config();

//multer
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'assets/images');
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});

app.use("/images", express.static(path.join(__dirname, "assets/images")));

const upload = multer({storage:storage});

//uplode image
app.post('/post/upload',upload.single('file'),(req,res)=>{
    try{
      return  res.status(200).json({message:'file uploade success'})
    }catch(err){
        res.status(400).json({error:err.message}); 
    }
})


//router
app.use('/auth',authrouter);
app.use('/user',userrouter);
app.use('/post',postrouter);

//Database connection
 mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(`${port}`,()=>{console.log(`Database connecte server is running ${port}`)}))
.catch((error)=>console.log(error));
