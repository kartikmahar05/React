import React from 'react'
import RecordHolder from './recordHolder'
import "./App.css"
import UseContext from './useContext'
import Slider from './Slider'
import MovieClone from './MovieClone'
import Counter from './Counter'
import UseEffect from './UseEffect'
import Apidata from "./Apidata"
import Material from "./Material"
import Header from './Header'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import ToDo from './ToDo'



const App = () => {
  
  return (
    
    <ToDo/>

   /* <BrowserRouter>
   <Header/>
    <Routes>

    <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>

    </Routes>
   </BrowserRouter> */
   
   
  )
}


export default App