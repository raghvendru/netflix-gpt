import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    //fetch trailer && update store with trailer video data
    const getMoviesVideos = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter(video=>video.type==="Trailer");
        const trailer = filterData.length ? filterData[0] :json.results[0]; //if no trailer take first one
        console.log(trailer);
       // setTrailerId(trailer.key);
       dispatch(addTrailerVideo(trailer));

    

    }

    useEffect(()=>{
        getMoviesVideos();
    },[])

}

export default useMovieTrailer;