import React, { useState } from 'react';

export default ()=> {     //this is how our hooks work. this is our entire fetch.
    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:4000/user',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"name":name, "email":email, "password":password, "phone":phone})
        }) 
    }

    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()


    // (form notes)the event is the onchange. its listening for onchange and targets the value your input. this is how we get setname.
   //(button notes) remember the 

    return(
        <form>
            <input type = 'text' placeholder= 'Name'onChange={e=> setName(e.target.value)}/>  
            <input type = 'email' placeholder= 'Email'onChange={e=> setEmail(e.target.value)}/>
            <input type = 'password' placeholder= 'Password'onChange={e=> setPassword(e.target.value)}/>
            <input type = 'phone' placeholder= 'Phone'onChange={e=> setPhone(e.target.value)}/> 
            <button type = "submit" onSubmit={handleSubmit}>submit</button>

        </form>
    )

    }