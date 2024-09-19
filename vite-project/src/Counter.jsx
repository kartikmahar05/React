import React, { useState } from 'react'
const Counter = () => {
  const [count,setCount]=useState(1)
  
  
  function decrement(){
    if (count>1){
setCount(count-1)
    }
    else{
      setCount(count)
    }
}
  function increment(){
    setCount(count+1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter

