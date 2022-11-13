import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [movies, setMovie] = useState([]);

  useEffect = (()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 945107a5e5108e11122d69a3e2e1e8c3191906e0'
      }
    })
    .then(resp => resp.json())
    .then(resp => setMovie(resp))
    .catch(error => console.log(error))
  },[])
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Movie Rater</h1>
        <div className='layout'>
          <div>
            {
              movies.map(movie => {
                return <div key={movie}>{movie.title}</div>
              })
            }
          </div>
          <div>Movie detail</div>
        </div>
      </header>
    </div>


  )
}

export default App
