const Product=require("../models/Img")
const postdata=(async(req,res)=>{
    try{
        console.log("body:", req.body)
        console.log("file:",req.file)
    const {name,price}=req.body
    const img=req.file.filename
    
    const data=new Product({
        name,
        price,
        img
    })
console.log(data)
    await data.save()
    return res.status(200).json({data})
    }
    catch(e){
    console.log("error",e)
    }
})
const getdata=async(req,res)=>{
    const data=await Product.find()
    res.send(data)

}

module.exports={postdata,getdata}