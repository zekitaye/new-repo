import express from 'express'
import mongoose from 'mongoose'

const router=express.Router()

import  { users }  from '../models/usermodel.js'

router.get('/',async (req,res) =>{
    try{
        const users1= await users.find({});
        return res.status(200).json(users1);

    }catch (error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
});
router.get('/:id',async (req,res) => {
    try{

        const { id } =req.params;

        const user=await users.findById(id);
        return res.status(200).json(user)
    } catch (error){
        console.log(error.message);
        res.status(500).send({message:error.message});

    }
});
router.post('/',async (req,res) => {
    try{
        if(!req.body.firstname ||!req.body.email||!req.body.password){
            return res.status(400).send({
               message:'fill all fields'
            });
        }
       const newuser={
        firstname:req.body.firstname,
        email:req.body.email,
        password:req.body.password,
       };
       const user1 = await users.create(newuser);
       return res.status(201).send(user1)
    }
    catch (error){
           console.log(error.message);
           res.status(500).send({message:error.message});
    }

});
router.delete('/:id',async (req,res) => {
    try{
    const { id }=req.params;
    const result= await users.findByIdAndDelete(id);
    if(!result){
        return res.status(404).json({message:'book not found'});
         
    }
    return res.status(200).send({message:'book deleted'})
    }catch(error){
console.log(error.message);
res.status(500).send({message:error.message});
    }
});
router.put('/:id',async (req,res) => {
    try{
            if(!req.body.firstname||!req.body.email|!req.body.password){
                return res.status(400).send({message:'enter required filleds'})
            }
            const { id } =req.params;
            const result=await users.findByIdAndUpdate(id,req.body);
            if(!result){
                return res.status(404).json({message:'book not found'})
            }
            return res.status(200).send({message:'updated successfuly'});
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});
export default router;