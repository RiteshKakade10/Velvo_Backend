import express from 'express';
import ensureToken from '../Middlewares/Auth.js';

const router=express.Router();

router.get("/",ensureToken,(req,res)=>{
    console.log(req.user);
    res.status(200).json([
        {
            name:"Mobile",
            quantity:120
        },
        {
            name:"Laptop",
            quantity:100
        }
    ])
});
export default router;