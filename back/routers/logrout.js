const express=require("express")
const router=express.Router()
const cont=require("../control/logcon")
const model=require("../Models/Log")
const login=require("../loginapi/logapi")
const modle=require("../loginapi/modle")


router.post("/signup", cont.postdata)
router.post("/login", login)
router.get("/dashbord",model,(req,res)=>{
    res.json({message:"acessed", user:req.user})
    res.send("hello")
})
module.exports=router