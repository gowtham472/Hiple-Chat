import React from 'react'
import './nav.css'
import Signin from './Signin'
import Logout from './Logout'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; 
function Nav() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className='header'>
      <h1 className='appname'>Hiple</h1>
      {user ? <Logout /> : <Signin />}
    </div>
  );
}

export default Nav;
