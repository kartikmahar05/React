
import React, { useState } from 'react'
import CompA from './compA'


const UseContext = () => {
    const [data,setData]=useState("Arpit")
  return (
    <div>
    <h1>Main component</h1>
    <CompA data={data}/>
    </div>
  )
}

export default UseContext