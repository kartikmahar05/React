import React from 'react'
import "./App.css"
import movies from "./movies.json"
import Movie from './Movie'
const MovieClone = () => {
    return (
      <div className='main'>
      {
        movies.map((e)=>{
          return(
            <Movie
              img={e.Poster}
              title={e.Title}
              year={e.Year}
            />

          )
        })
      }
  
      </div>
    )
  }
  
  export default MovieClone