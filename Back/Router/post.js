const express = require('express');
const router = express.Router();
const { getFeedpost, createPost, userPost, updatePost, deletePost, likePost } = require('../Controller/post')

//post requsts
router.post('/create',createPost)

//get requsts
router.get('/allpost',getFeedpost)
router.get('/user/:id',userPost)

// put
router.put('/update/:id',updatePost)
router.put('/like/:id',likePost)


//delete
router.delete('/:id',deletePost)


module.exports = router;