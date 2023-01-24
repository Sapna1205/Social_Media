// import express from "express";
// //import { deleteUser, followUser, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";
// import {getUser, updateUser, deleteUser, followUser, UnFollowUser, getAllUsers} from "../Controllers/UserController.js"
// const router = express.Router();

// // router.get('/', async(req,res)=>{res.send("User Route")})
// router.get('/', getAllUsers) 
// router.get('/:id', getUser)
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)
// router.put('/:id/follow', followUser)
// router.put('/:id/unfollow', UnFollowUser)

// export default router;

import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, UnFollowUser, updateUser } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, UnFollowUser)

export default router