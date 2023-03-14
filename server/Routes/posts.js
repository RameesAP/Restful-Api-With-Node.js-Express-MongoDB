import express from 'express'
import { createPost, deletePost, getAllPosts, getSpecifc, updatePost } from '../controllers/PostController.js';
const router=express.Router();




router.post('/',createPost)
router.get('/',getAllPosts);
router.get('/:id',getSpecifc)
router.delete('/:id',deletePost)
// router.patch('/:id',updatePost)
router.put('/:id',updatePost)




export default router