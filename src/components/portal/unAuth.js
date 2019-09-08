import express from "express";


import mongoose from "mongoose";
const { Types } = mongoose;
const { ObjectId } = Types;


import service from "./service";
import { throws } from "assert";
const router = express.Router();

router.post('/signup',async(req,res,next) =>
{
    const {err,user} = await service.addUser(req.body);
    if(err) next(err); 
    res.send(user);
})


router.post('/addGrower',async(req,res,next) =>
{
    const {userId} = req.body;
    const {err:growerErr,addGrower:newGrower} = await service.addGrower(req.body);
    if(growerErr) next(growerErr);
    else{
    const {err:userErr,user:updatedUser} = await service.updateUser({_id:ObjectId(userId)},{$addToSet:{growers:newGrower._id}});
    res.send(newGrower);
    } 
})


router.get("/user",async(req,res,next) =>
{
    const {err,user}= await service.getUser(req.body);
    if(err) next(err);
    else if(user) res.send(user)
    res.send("User Not Found")
})

module.exports = router;