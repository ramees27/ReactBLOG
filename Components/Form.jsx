import React, { useContext, useState } from 'react'
import {userContext} from './Context'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const{state,setState}=useContext(userContext)
    console.log(state);
    
    const navigate=useNavigate()
    const[name,setName]=useState("")
    const[batch,setBatch]=useState("")
    const[hub,setHub]=useState("")
    const handleChange=(e)=>{
        e.preventDefault();
        setState([...state, {name,batch,id:Date.now(),hub}])
        setName("")
        setBatch("")
        setHub("")
        navigate("/")
     }    
   return (
    <div >
    <form onSubmit={handleChange}>
        <label>Name: </label> 
    <input type="text" value={name} placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)}/><br/>
    <label>Batch: </label> 
    <input type="text" value={batch} placeholder='Enter Batch' required onChange={(e)=>setBatch(e.target.value)}/> <br/>
    <label>HUB Name: </label> 
    <input type="text" value={hub} placeholder='Enter hub' required onChange={(e)=>setHub(e.target.value)}/><br/><br />
    <button type='Submit'>Submit</button><br/>
    </form>


    </div>
  )
}

export default Form