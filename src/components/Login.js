import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from "../utils/Validate.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase.js";
import {  useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser} from "../utils/userSlice.js"




const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch

  const navigate = useNavigate();


  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessgae] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = async () => {
    // Validate the form
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessgae(msg);
    if (msg) return; // Stop if validation fails

    if (!isSignInForm) {
      // Sign up logic
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = userCredential.user;
         
        updateProfile(user, {
        displayName: name.current.value, photoURL: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-829d4.appspot.com/o/myPictures%2FHeroSectionPicture?alt=media&token=31641d40-3176-4776-9bb1-f11289e6d1bb"

         }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

         

          navigate("/browse");
  
        }).catch((error) => {
          setErrorMessgae(error.msg)
  
          });
        console.log("User signed up:", user);
        navigate("/browse");
      } catch (error) {
        setErrorMessgae(error.code + " - " + error.message);
      }
    } 
    else {
      // Sign in logic
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigate("/browse");

      } catch (error) {
        setErrorMessgae(error.code + " - " + error.message);
      }
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input ref={name} type="text" placeholder="Full name" className="p-4 my-2 w-full bg-gray-700" />
        )}

        <input ref={email} type="text" placeholder="email or phone Number" className="p-4 my-2 w-full bg-gray-700" />
        <input ref={password} type="password" placeholder="password" className="p-4 my-2 w-full bg-gray-700" />

        {errorMessage && <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>}

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
