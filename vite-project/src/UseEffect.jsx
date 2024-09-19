import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [value,setValue]=useState("priyanshu")
    const [number,setNumber]=useState(2)
    useEffect(()=>{
        console.log("hello I am called",value)
        
    })
    function increment(){
        setValue("Piyush");
    }
    function decrement(){
        setNumber(number+1);
    }
  return (
    <>
    <h1>Hello {value},{number}</h1>
    <button onClick={increment}>click here</button>
    <button onClick={decrement}>click here</button>
    
    </>
  )
}

export default UseEffect