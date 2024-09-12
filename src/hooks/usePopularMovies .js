import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'
import  { useEffect } from 'react'

//fetch data from tmdb and updating store and its custom hook


const usePopularMovies =()=>{
    const dispatch = useDispatch();


    //api
    const getPopularMovies = async () =>{
        const data  = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));

    }

    useEffect(()=>{
        getPopularMovies();

    },[])
}

export default usePopularMovies;