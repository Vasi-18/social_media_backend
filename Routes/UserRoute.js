import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, updateUser } from '../Controllers/UserController.js'
// import authMiddleWare from '../Middleware/authMiddleWare.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
// router.put('/:id/follow', followUser)
// router.put('/:id/unfollow',authMiddleWare, unfollowUser)

export default router