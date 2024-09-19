import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header'
import Gallery from './Gallery'
import Home from "./Home"
import About from "./About"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },{
    path:"/about",
    element:<About/>
  },{
    path:"/gallery",
    element:<Gallery/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <App/>
  </React.StrictMode>,

)
