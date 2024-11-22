import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Content from '../Components/Content'
import First from '../Components/First'
import Form from '../Components/Form'
import Context from '../Components/Context'
import './App.css'

function App() {
 
  return (
    
    <Router>
      <Context>
      <Routes>
       <Route path='/form' element={<Form/>}></Route>
       <Route path='/' element={<First/>}></Route>
       <Route path='/content/:id' element={<Content/>}></Route>

      </Routes>
      </Context>
    </Router>
   
    
    )
}

export default App