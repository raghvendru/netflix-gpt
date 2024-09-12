import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies "
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer"; 
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";


export const Browse = () => {
    //calling custom hook
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    


  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
      {/* maincontainer
         -video bg
         -video title
      secondary containeer
         -movie list *n
           -cards*n */}


        </div>
  )
}
export default Browse;
