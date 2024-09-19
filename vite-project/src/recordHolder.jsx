import React, { useState } from 'react'
import "./App.css"
import { Button, Stack,TextField } from '@mui/material';




const RecordHolder = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [data,setData]=useState([])
  function addData(){
    setData([...data,{name:name,email:email}]);
      setName("");
      setEmail("");
  }
  function handlePress(event){
    
    if(event.key=='Enter'){
      console.log(event.key)
      addData();
    }
  }
  function removeItem(index){
    let arr=data;
    arr.splice(index,1)
    setData([...arr])
  }
  return (
    <div id="app">
      
      <div id="heading">
        <Stack id="container" spacing={20} direction="row">
          <TextField 
           value={name}
           onChange={(event)=>setName(event.target.value)}
           onKeyPress={(e)=>handlePress(e)}
           
          //  onPaste={()=>alert("Please do not paste here")}
           
           id="outlined-basic" 
           label="Name" 
           variant="outlined" />
          <TextField 
          value={email} 
          onChange={(event)=>setEmail(event.target.value)}
          onKeyPress={(e)=>handlePress(e)}
          id="outlined-basic" 
          label="Email" 
          variant="outlined" />
          <Button onClick={addData} variant="outlined">Add</Button>
        </Stack>
      </div>
      <div className='data'>
        <div className='data_value'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
   {
    data.map((element,index)=>{
      return(
        <div key={index} className='data_value'>
          <h4>{element.name}</h4>
          <h4>{element.email}</h4>
          <Button onClick={()=>removeItem(index)}>remove</Button>
        </div>
      )
    })
   } 
      </div>
    </div>
  )
}

export default RecordHolder