const User = require('../Model/user');
const bcrypt = require('bcrypt');

const Register = async(req,res)=>{
    try{
        const {userName,email,password,profilePicture,desc,} = req.body;

        //email cheking 
        const existemail = await User.findOne({email});
        if(existemail){
           return  res.status(404).json({message:"email already exist"})
        }
        
        //hashing password
        const salt = await bcrypt.genSalt(8);
        const hashing = await bcrypt.hash(password,salt);

        //create user
        const user = new User ({
            userName,
            email,
            password:hashing,
            profilePicture,
            desc,
        })

        const saveuser = await user.save();
        res.status(200).json({saveuser});

    }catch(err){
        res.status(400).json({error:err.message}); 
    }
};

const Login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        // email check
        const  user = await User.findOne({email})
        if (!user){
         return res.status(404).json({message:'email not fount'});
        
        }

        //password checking 
        const checking = await bcrypt.compare(password,user.password);
        if(!checking){
            return res.status(400).json({message:'Wrong passsword'});
        }
      
        res.status(200).json(user)
      
     }catch(err){
        res.status(400).json({error:err.message}); 
    }
}

module.exports ={Register,Login}