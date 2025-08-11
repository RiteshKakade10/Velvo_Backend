import { name } from "ejs";
import { date } from "joi";
import mongoose from "mongoose";
const Schema=mongoose.Schema();

const wishlist=new Schema({
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId;
                ref:'Product',
                required:true
            },
            AddedAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
},{timestamps:true})

export default wishlist;