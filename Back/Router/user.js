const express = require ('express');
const { getAllUser, getUserById, updateUser, deleteUser,follow,unfollow, allFriends } = require('../Controller/user');
const router = express.Router();

//get method
router.get('/alluser',getAllUser);
router.get('/allfriends/:id',allFriends);
router.get('/:id',getUserById);

//update
router.put('/update/:id',updateUser);
router.put('/follow/:id',follow);
router.put('/unfollow/:id',unfollow);

//delete
router.delete('/:id/delete',deleteUser);


module.exports= router;
