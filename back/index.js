const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const dotenv=require("dotenv")
const rout=require("./routers/logrout")
const cors=require("cors")


const app=express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
app.use("/userdata",rout)

mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log("error")
})
app.listen(3500,(res,req)=>{
    console.log("server run succesfully")
})