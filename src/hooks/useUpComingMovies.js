import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {  addUpComingMovies } from '../utils/moviesSlice'
import  { useEffect } from 'react'

//fetch data from tmdb and updating store and its custom hook


const useUpComingMovies =()=>{
    const dispatch = useDispatch();


    //api
    const getUpComingMovies = async () =>{
        const data  = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json = await data.json();
        console.log(json.results);
        dispatch(addUpComingMovies(json.results));

    }

    useEffect(()=>{
        getUpComingMovies();

    },[])
}

export default useUpComingMovies;