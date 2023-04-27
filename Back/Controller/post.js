const Post = require('../Model/post');
const User = require('../Model/user');

//create post 
const createPost = async (req,res)=>{
    try{
         const newpost = new Post(req.body)

         await newpost.save();
         res.status(200).json(newpost);
    
    }catch(err){
        res.status(400).json({error:err.message})
    }
};
 
//feed post 
const getFeedpost = async (req,res)=>{
     try{
        
        const post = await Post.find();
        res.status(200).json(post);

     }catch(err){
        res.status(400).json({error:err.message})
     }
};

//user post 
const userPost = async(req,res)=> {
    try{
      const{id} = req.params;
      const post = await Post.findById(id);
      res.status(200).json(post)
    }catch(err){
      res.status(400).json({error:err.message});
    }
};

//update post
const updatePost = async(req,res)=>{
    try{
       const {id} = req.params;
       const {userId } = req.body;
       const post = await Post.findById(id)

       if(post.userId === userId){
        await post.updateOne({$set:req.body});
        res.status(200).json({message:'post update'});
       } 
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

//delete post
 
const deletePost = async(req,res)=>{
    try{
       const {id} = req.params;
       const post = await Post.findById(id)
      if(post.userId === req.body.userId){
        await post.deleteOne();
        res.status(200).json({message:'post deleted'});
       } else{
        res.status(400).json({message:'you can only delete your post'})
       }
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

//like dislike post 
const  likePost = async (req,res)=>{
     try{
        const {id} =req.params;
       const post = await Post.findById(id);
       if(!post.likes.includes(req.body.userId)){
        await post.updateOne({$push:{likes:req.body.userId}});
        res.status(200).json({message:'you like post'});
       }else{
        await post.updateOne({$pull :{likes:req.body.userId}});
          res.status(200).json({message:'post has been disliked'})
       }

     }catch(err){
        res.status(400).json({error:err.message})
     }
};

//feed post 
const feedPost = async (req,res)=> {
  try{
    const curentUser = await User.findById(req.params.id) 
    const userPost = await Post.find({userId:curentUser._id})
    const friendsPost = await Promise.all(
        curentUser.following.map((friendid)=>{
            return  Post.find({userId:friendid})   
         })
    );
    res.status(200).json(userPost.concat(...friendsPost))
  }catch(err){
    res.status(400).json({error:err.message})
  }
};

module.exports ={createPost,getFeedpost,userPost,deletePost,updatePost,feedPost,likePost};