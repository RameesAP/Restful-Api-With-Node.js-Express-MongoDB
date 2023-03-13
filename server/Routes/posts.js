import express from 'express'
import { createPost, getAllPosts, getSpecifc } from '../controllers/PostController.js';
const router=express.Router();




router.post('/',createPost)
router.get('/',getAllPosts);
router.get('/:id',getSpecifc)




export default router