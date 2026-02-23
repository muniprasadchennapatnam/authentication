const bcrypt= require("bcrypt")
const users =require("../Models/Log")
const postdata = async (req,res)=>{
    try{
    const {username,password}=req.body
    const hashpass=await bcrypt.hash(password,10)
    console.log(hashpass)
    const data= new users({username,
        password:hashpass
    })
        await data.save()
   
        return res.status(200).json(data)
    }catch(e){
        res.status(500).json()
        console.log(e)
    }
}
module.exports={postdata}