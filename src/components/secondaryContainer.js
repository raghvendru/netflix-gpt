import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  return (
    movies.NowPlayingMovies &&(
    <div className=' bg-black'>
      <div className='-mt-52  pl-12 relative z-20'>
      <MovieList title={"Now playing"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRated}/>
      <MovieList title={"popular"} movies={movies.popularMovies}/>
      <MovieList title={"upcoming Movies"} movies={movies.upComingMovies}/>


      </div>
   
      
        
    </div>
    )
  )
}

export default SecondaryContainer