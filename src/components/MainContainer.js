import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    //optional chainig--if nowplaying is empty it wont tyhrow error
    const movies = useSelector((store) => store.movies?.NowPlayingMovies);
    console.log(movies);
    if(!movies) return;
    const mainMovie = movies[0];
    console.log("movies"+mainMovie);
    const {original_title,overview,id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer