import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies "
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer"; 
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


export const Browse = () => {

    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

    //calling custom hook
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    


  return (
    <div>
        <Header/>
        {
            showGptSearch ?  (<GptSearch/> ) :
            (
                <>
                <MainContainer/>
                <SecondaryContainer/>
                </>

            )


        }
       
      
          


        </div>
  )
}
export default Browse;
