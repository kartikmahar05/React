import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>
    <h1>CompB</h1>
    <CompC data={props.data}/>
    </div>
  )
}

export default CompB