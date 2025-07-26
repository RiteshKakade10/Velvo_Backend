import express from 'express';

const router=express.Router();

router.post("/products",(req,res)=>{
    res.send("All products are here");
});

export default router;