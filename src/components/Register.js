import React, { useState } from 'react';
import { Redirect } from 'react-router-dom' //this is from a part of the react router dom. 

export default ()=> {     //this is how our hooks work. this is our entire fetch.
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState() 
    const [toHome, setToHome] = useState(false)   

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:4000/user',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"name":name, "email":email, "password":password, "phone":phone})

        })
        await setToHome(true) 
    }

    // (form notes)the event is the onchange. its listening for onchange and targets the value your input. this is how we get setname.
   //(button notes) remember the 
   
    return(
        // it puts the handlesubmit in the form tag to have affect on whole for , not just the form button itself.
        <>
        {toHome ? <Redirect to =  '/'/> : null}
        <form onSubmit={handleSubmit}> 
            <input type = 'text' placeholder= 'Name' required  onChange={e=> setName(e.target.value)}/>  
            <input type = 'email' placeholder= 'Email' required onChange={e=> setEmail(e.target.value)}/>
            <input type = 'password' placeholder= 'Password' required minLength = '4' maxLength = '12' onChange={e=> setPassword(e.target.value)}/>
            <input type = 'phone' placeholder= 'Phone' required maxLength = '10' onChange={e=> setPhone(e.target.value)}/> 
            <button type = "submit">submit</button>

        </form>
        </>
    )
    } 
