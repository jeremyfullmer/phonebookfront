import React, {useState, useEffect} from "react"
import axios from "axios"



export default ()=> {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios
        .get("http://localhost:4000")
        .then(result => setData(result.data));
    },[]
    

    )
    const handleSubmit = async (e) =>{
        
        await fetch ("http://localhost:4000/user",{
            method: "DELETE"
        })

    }
    return(
        <>

        <p>hi from home</p>
        <a href = "/user" className = "button">add phone number</a>
        

        <div class="container">
  <div class="row">
   <div class="col">
      name
    </div>
    
    <div class="col">
      phone
    </div>
    </div>
    </div>
    
    <div class="container">
    <div class="row">
<div class="col">

  {data.map((item, index)=>(
    
    <div item = {item._id} index= {index}><a href = "/update" className = "button">{item.name}</a></div> 
  ))}
</div>
<div class="col">
<div class="col">
  {data.map((item, index)=>(
      <div item = {item._id} index= {index}> {item.phone}<button><a href = {"/update/" + item._id}>edit</a></button></div> 
  ))}
  
</div>
</div>
</div>
</div>

<form onSubmit = {handleSubmit}>
<input type = "submit" value = "Delete all"/>
</form>

</>

    )
}
