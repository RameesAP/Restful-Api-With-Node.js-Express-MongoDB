import express from 'express'
import { createPost, deletePost, getAllPosts, getSpecifc } from '../controllers/PostController.js';
const router=express.Router();




router.post('/',createPost)
router.get('/',getAllPosts);
router.get('/:id',getSpecifc)
router.delete('/:id',deletePost)




export default router