import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer"; 


export const Browse = () => {
    //calling custom hook
    useNowPlayingMovies();


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
