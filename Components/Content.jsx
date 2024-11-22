import React, { useContext } from 'react'
import {userContext} from './Context'
import { useNavigate, useParams } from 'react-router-dom'

const Contetnt = () => {
       const{state}=useContext(userContext)
       const{id}=useParams()
     const values= state.find((finds)=>finds.id===Number(id))
     const navigate=useNavigate()


  return (
    <div>
     <h1>Details</h1>
     <h3>Name: {values.name}</h3>
     <h3>Batch: {values.batch}</h3>
     <h3>Hub:  {values.hub}</h3>
     <button onClick={()=>navigate("/")}>Go to Home</button>


    </div>
  )
}

export default Contetnt