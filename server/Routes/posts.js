import express from 'express'
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('we are on posts');
});

router.get('/specific',(req,res)=>{
    res.send('we are on specific');
});



export default router