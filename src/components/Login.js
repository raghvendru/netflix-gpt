import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  };
  return (
    
    <div>
    <Header/>
    

    <div className='absolute'>
      <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="bg"/>

    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
    {!isSignInForm && (<input type='text' placeholder='Full name' className='p-4 my-2 w-full bg-gray-700'/>
     )}     
      <input type='text' placeholder='email or phone Number' className='p-4 my-2 w-full bg-gray-700'/>
      <input type='password' placeholder='password' className='p-4 my-2 w-full bg-gray-700'/>
      <button className='p-4 my-6 bg-red-700 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >{isSignInForm ? "New to Netflux? Sign Up Now" : "Already registered? Sign In now"}</p>



    </form>
    </div>
    
  );
}

export default Login