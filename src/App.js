import React, { useState } from 'react'
import './App.css'
import MovieDetails from './Components/MovieDetails'
import MovieList from './Components/MovieList'


const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)

  // when click console.log show movie title
  const movieClicked = movie => {
    setSelectedMovie(movie);
  }
  return (
    <div className='App'>
      <header>
        <h2 className='App-header'>Movie Rater</h2>
      </header>
      <div className='layout'>
          <MovieList movieClicked={movieClicked}/>
          <MovieDetails movie = {selectedMovie}/>
      </div>
    </div>


  )
}

export default App

