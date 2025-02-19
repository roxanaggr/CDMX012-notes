import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
//import Allroutes from './components/Allroutes';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './components/public/Home';
import SignIn from './components/public/Signin';
import SignUp from './components/public/Signup';
import Notes from './components/private/Notes'
import Notescreate from './components/private/Notescreate';
import Notesedit from './components/private/Notesedit'
import { googleSignIn } from './lib/auth/Auth';


function App () 
{

  const [isAuth, setAuth] = useState (false);
    onAuthStateChanged(auth, (user) => {   
        if (user) {
            setAuth(user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //const uid = user.uid;
          //console.log (uid)
        } else {
          //setAuth(false)
        }
      });
  return (
      <div>
       {isAuth?
            <Routes>
                  <Route path='/' element={<Home googleSignIn={googleSignIn} />}/>
                  <Route path='/Notes' element={<Notes Notesedit={Notesedit}/>}/>
                  <Route path='/Notescreate' element={<Notescreate />}/>
                  <Route path="/Notesedit/:id" element={<Notesedit/>} />
            </Routes>:
            <Routes>
                  <Route path='/' element={<Home googleSignIn={googleSignIn} />}/>
                  <Route path='/Signin' element={<SignIn />}/>
                  <Route path='/Signup' element={<SignUp />}/>
            </Routes>}
      </div> 
)
  
} export default App;
