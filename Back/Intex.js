const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
const authrouter = require('./Router/auth');
const userrouter = require('./Router/user');
const postrouter = require('./Router/post')
const port = process.env.PORT || 5001 ;  
const app = express();

//config
app.use(express.json());  
app.use(cors());
dotenv.config();

//router
app.use('/auth',authrouter);
app.use('/user',userrouter);
app.use('/post',postrouter);

//Database connection
 mongoose.connect(`${process.env.MONGO_URL}`)
.then(app.listen(`${port}`,()=>{console.log(`Database connecte server is running ${port}`)}))
.catch((error)=>console.log(error))