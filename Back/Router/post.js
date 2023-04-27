const express = require('express');
const router = express.Router();
const { getFeedpost, createPost, userPost, updatePost, deletePost, likePost,feedPost} = require('../Controller/post')

//post requsts
router.post('/create',createPost)

//get requsts

router.get('/allpost',getFeedpost)
router.get('/:id',userPost)
router.get('/feed/:id',feedPost)


// put  
router.put('/update/:id',updatePost)
router.put('/:id/like',likePost)


//delete
router.delete('/:id',deletePost)


module.exports = router;