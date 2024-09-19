import React, { useEffect, useState } from 'react'
import Employee from './Employee'
import "./App.css"


const Apidata = () => {
const[state,setState]=useState(5)
const[employee,setEmployee]=useState([])
useEffect(()=>{
  async function getdata(){
    const data=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
    const dataJson=await data.json();
    setEmployee(dataJson)
  }
  getdata();
},[state])

  return (
    <div>
    <button onClick={()=>{setState(state+1)}}>{state}</button>
      <table>
      <tr>
        <th>First Name</th>
        <th>Age</th>
        <th>Email</th>
    </tr>
    </table>
    {
      employee.map((e)=>{
        return(
          <div>
            <Employee
              name={e.firstName}
              age={e.age}
              email={e.email}
            />
          
          </div>
        )
      })
    }
  </div>
  )
}

export default Apidata