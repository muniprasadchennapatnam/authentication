const express =require("express")
const mongoose=require("mongoose")
const rout=require("./routs/rout")
const bodyparser=require("body-parser")
const path=require("path")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/product",rout)
app.get("/",(req,res)=>{
    res.send("hello ")
})
mongoose.connect("mongodb+srv://chmuniprasad06:Muni2005@cluster0.6ayyupi.mongodb.net/zomato?appName=Cluster0").then(()=>{
    console.log("connected succesfully")
}).catch(()=>{
    console.log("error")
})
app.listen(2000,(req,res)=>{
    console.log("server runs")
})