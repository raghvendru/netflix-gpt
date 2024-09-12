import React, { useEffect } from 'react';
import Login from './Login';
import { Browse } from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase.js";
import { useDispatch } from 'react-redux';
import { addUser,removeUser} from "../utils/userSlice.js"


const Body = () => {
  const dispatch = useDispatch();

   const appRouter = createBrowserRouter([
    {
        path:"/" ,
        element:<Login/>

    },
    {
        path:"/browse",
        element:<Browse/>

    }
   ])
  
   //i have to call once so useing useEffect and disptching here
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          //sign in
          const {uid,email,displayName,photoURL} = user.uid;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

        } else {
          //sign out
          dispatch(removeUser());
        }
      });

   },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    
    </div>
  );
};

export default Body
