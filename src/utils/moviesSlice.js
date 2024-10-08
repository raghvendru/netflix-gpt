import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.NowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo :(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topRated = action.payload;
        },
        addUpComingMovies : (state,action)=>{
            state.upComingMovies= action.payload;
        },
    },

});
export const { addNowPlayingMovies,addTrailerVideo,addPopularMovies ,addTopRatedMovies,addUpComingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;