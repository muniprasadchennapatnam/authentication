const mongoose=require("mongoose")
const express=require("express")
const data=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:
        {
            type:Number,
            required:true

        },
    img:{
        type:String,
        

    }
    
})
module.exports=mongoose.model("product",data)