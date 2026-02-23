const jwt=require("jsonwebtoken")
const verify=((req,res,next)=>{
    const header=req.headers.authorization
    if(!header)return(res.status(401).json({message:"access denait"}))
        const token=header.split(" ")[1]
    try{
const verifyed=jwt.verify(token,process.env.JWT.KEY)
req.user=verifyed
req.user.userid
next()
    }catch(e){
return res.status(500).json({message:"invalid token"})
    }
})
module.exports= verify