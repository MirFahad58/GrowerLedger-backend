import express from "express";
import service from "./service";
const router = express.Router();

router.post('/signup',async(req,res,next) =>
{
    const {err,user} = await service.addUser(req.body);
    if(err) next(err)
    res.send(user);
})

router.get("/user",async(req,res,next) =>
{
    const {err,user}= await service.getUser(req.body);
    if(err) next(err);
    else if(user) res.send(user)
    res.send("User Not Found")
})

module.exports = router;