import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MovieList = (props) => {
 
  // onClick 
  const movieClicked = movie => evt =>{
    props.movieClicked(movie)
  }

  const [movies, setMovies] = useState([])
  
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/movies/")
     .then(res => {
       console.log(res)
       setMovies(res.data)
     })
     .catch(err => {
       console.log(err)
     })
  },[])
  return (
    <div>
      <div>
        {
          movies.map(movie => <div key={movie.id}>
            <h2 onClick={movieClicked(movie)}>{movie.title}</h2></div>)
        }
      </div>
    </div>
  )
}

export default MovieList