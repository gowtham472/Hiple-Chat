import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './nav.css';

const Logout = () => {
  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <button onClick={handleSignOut} className='obutton'>
      LOG OUT
    </button>
  );
};

export default Logout;
