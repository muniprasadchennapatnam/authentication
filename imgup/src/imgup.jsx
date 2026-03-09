import react from "react"
import React from 'react'
import { useState,useEffect } from "react"
const Imgup = () => {
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [img,setImg]=useState(null)

  const fun=async(e)=>{
    e.preventDefault()
const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("img", img);
    //  for (let pair of formData.entries()) {
    // console.log(pair[0], pair[1]);
  //}
  await fetch("http://localhost:2000/product/data", {
    method: "POST",
    body: formData,
  });
alert("uplode success")
  }
  return (
    <form onSubmit={fun}>
    <div className="container">
      <div className="img">
        
        <h2>add product</h2>
        <input type="text" placeholder="product name" name="name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="price" name="price" onChange={(e)=>setPrice(e.target.value)}/>
        <input type="file" placeholder="img" name="img" onChange={(e)=>setImg(e.target.files[0])} />
        <button type="submit">submit</button>
        
      </div>
    </div>
    </form>
  )
}

export default Imgup