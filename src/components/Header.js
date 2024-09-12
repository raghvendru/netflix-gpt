import React from 'react'
import { auth } from "../utils/Firebase.js";
import {  signOut } from "firebase/auth";
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {addUser,removeUser} from "../utils/userSlice.js"
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import {changeLanguage} from "../utils/configSlice.js"



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
    

    const handleSignOut =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");

          });
          
    }

     //i have to call once so useing useEffect and disptching here
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          //sign in
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse")


        } else {
          //sign out
          dispatch(removeUser());
          navigate("/")
        }
      });
      //unsub when component unmounts
      return () => unsubscribe();

   },[]);

   const handleGptSearch = ()=>{
    //toggle gptsearch
    dispatch(toggleGptSearchView());
   }

  const handleLanguageChange =(e) =>{
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img 
    className="w-44 "
    src = {LOGO}
    alt="logo"
    />
   { user && <div className='flex p-2'>
   {showGptSearch && ( <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
       
    </select>)}
    <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearch}>{showGptSearch? "Home page" :"GPT SEARCH "} </button>
        <img className='w-12 h-12 ' alt="icon" src={user?.photoUrl}
        
        />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>
}
    </div>
  );
}

export default Header