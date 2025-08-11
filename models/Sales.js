import { required } from "joi";
import mongoose from "mongoose";

const Schema=mongoose.Schema;

const sales=new Schema(
   { 
    Name:{
        type:String,
        required:true,

    },
     Age:{
        type:Number,
        required:true,

    },
     Email:{
        type:String,
        required:true,

    },

});

export default sales;