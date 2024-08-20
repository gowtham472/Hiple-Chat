import React from 'react';
import './nav.css';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';

const Signin = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).catch((error) => {
      console.error('Error during sign-in with Google: ', error);
    });
  };

  return (
    <div className='signinbutton'>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default Signin;
