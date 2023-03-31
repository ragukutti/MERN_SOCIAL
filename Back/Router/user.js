const express = require ('express');
const { getAllUser, getUserById, updateUser, deleteUser,follow,unfollow, allFriends } = require('../Controller/user');
const router = express.Router();

//get method
router.get('/alluser',getAllUser);
router.get('/allfriends',allFriends);
router.get('/:id',getUserById);

//update
router.put('/:id/update',updateUser);
router.put('/:id/follow',follow);
router.put('/:id/unfollow',unfollow);

//delete
router.delete('/:id/delete',deleteUser);


module.exports= router;
