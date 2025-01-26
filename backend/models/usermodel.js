import { text } from "express";
import mongoose from "mongoose";


const userschema=mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
}
);
export const users=mongoose.model('users',userschema);