import React, { createContext, useState } from 'react'
export const userContext=createContext()
const Context = ({children}) => {
    const [state,setState]=useState([])
  return (
    <userContext.Provider value={{state,setState}}>

         {children}


    </userContext.Provider>
  )
}

export default Context