const User = require('../Model/user');

//get all user
const getAllUser = async (req,res)=>{
    try{
         const user = await User.find();
         res.send(user);
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

//get by id
const getUserById = async (req,res)=>{
    try{
       const {id} = req.params;
       const user = await User.findById(id) 
       if(!user){
        return res.status(400).json({message:'user not foud'})
       }
       res.status(200).json(user)
    }catch(err){
        res.status(400).json({error:err.messsage})
    }
};

//update user
const updateUser = async (req,res)=>{
    try{
       const {id} =req.params;
       const {userId} = req.body; 
       if(id === userId){ 
         const user = await User.findByIdAndUpdate(id,{$set:req.body});
         res.status(200).json({message:'update user'});
        }
    }catch(err){
        res.status(404).json({error:err.message})  
    }
};

//delete user
const deleteUser = async (req,res)=>{
    try{
        const {id } = req.params;
        const {userId} = req.body;
        if(id === userId){
            const user = await User.findByIdAndDelete(id);
            res.status(200).json(user);
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
};
            

//follow
const follow = async (req,res)=>{
    try{
        const {id} = req.params;
        const {userId} = req.body;
        const user = await User.findById(id);
        const currentUser = await User.findById(userId);
     if(!user.followers.includes(userId)){
       await user.updateOne({$push:{followers:userId}});
       await currentUser.updateOne({$push:{following:id}});
       res.status(200).json(" follow success")
     }else{
        res.status(404).json("user already follow by you")
     }
     
    }catch(err){
        res.status(400).json({error:err.messsage})
    }
};

//unFollow
const unfollow = async (req,res)=>{
    try{
        const {id} = req.params;
        const {userId} = req.body;
        const user = await User.findById(id);
        const currentUser = await User.findById(userId);
     if(user.followers.includes(userId)){
       await user.updateOne({$pull:{followers:userId}});
       await currentUser.updateOne({$pull:{following:id}});
       res.status(200).json("un followed")
     }else{
        res.status(404).json("user already unfollow by you")
     }
     
    }catch(err){
        res.status(400).json({error:err.messsage})
    }
};

//get Friends
const allFriends = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        const friends = await Promise.all(
            user.followers.map((id)=>(User.findById(id)))
        )

        const formatfriends = friends.map(
             ({_id,userName,profilePicture})=>{
                return {_id,userName,profilePicture}
             }
          )
          res.status(200).json(formatfriends);
    } catch(err) {
        res.status(400).json({error:err.message})
    }
}
module.exports = {getAllUser,getUserById,updateUser,deleteUser,follow,unfollow,allFriends}