import { useEffect, useState } from "react";
import Bord from "./bord"
function Dash(){

const [data,setData]=useState([])

useEffect(()=>{
fetch("http://localhost:2000/product/getdata")
.then(res=>res.json())
.then(data=>setData(data))
},[])
const imgurl="http://localhost:2000/uploads/"
return(
  <div>
    <Bord/>
<div className="dash">
  
{
data.map((item)=>(
<div className="card" key={item._id}>
  <img src={`${imgurl}${item.img}`} width="200"/>
<h2>{item.name}</h2>
<p>${item.price}</p>

</div>
))
}
</div>
</div>
)

}

export default Dash;