import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Allroutes from './components/Allroutes';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export function App () 
{

  const [isAuth, setAuth] = useState (false);
    onAuthStateChanged(auth, (user) => {   
        if (user) {
            setAuth(user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log (uid)
        } else {
          setAuth(false)
        }
      });

  return (
      <Routes>
        <Route path='*' isAuth={isAuth} element={<Allroutes />} />
      </Routes> 
)
  
} export default App;
