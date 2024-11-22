import React, { useContext } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { userContext } from './context'


const First = () => {
const {state}=useContext(userContext)
 const navigate=useNavigate()

 const toGo=()=>{
        navigate('/form')
  }
  return (
    <div>
    {state.map((names)=>(
        <li key={names.id}><Link to={`/content/${names.id}`}>{names.name}</Link>
</li>
    ))}
     <button onClick={toGo}>Create</button>
    </div>
  )
}

export default First;


