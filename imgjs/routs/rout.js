const express=require("express")
const router=express.Router()
const multer=require("multer")
const path=require("path")
const cont=require("../cont/control")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post("/data",upload.single("img"),cont.postdata)
router.get("/getdata",cont.getdata)
module.exports=router