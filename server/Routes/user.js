import express from 'express'
const router=express.Router();


router.get('/',(req,res)=>{
    res.send('we are on user');
});

router.get('/userposts',(req,res)=>{
    res.send('we are on userposts');
});

export default router