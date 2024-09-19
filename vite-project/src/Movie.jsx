import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>
    <img id='image' src={props.img}/>
    <h1>{props.title}</h1>
    <h3>{props.year}</h3>
    </div>

  )
}

export default Movie