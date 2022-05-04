import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { logOut } from './auth/Auth';
import { Home } from './components/Home'
import { SignIn } from './components/Signin'
import { SignUp } from './components/Signup'
import { Notes } from './components/Notes'
import { GoogleSignIn } from './components/Googleauth'
import { Routes, Route } from 'react-router-dom';

function allRoutes() {
    
    const [isAuth, setAuth] = useState (false);
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setAuth(user)
        //const uid = user.uid;
        } else {
        setAuth(null)
        }
      })
    
  return (
      <Routes>
        {isAuth ? <Route path ='/' element = {<Notes logout={logOut}/>}></Route>
            :<>
                
                <Route path='/Signin' element={<SignIn />}>
                </Route><Route path='/Signup' element={<SignUp />}>
                </Route><Route path='/Googleauth' element={<GoogleSignIn />}>
                </Route>
            </>
        }
      </Routes>
    
  )
}

export default allRoutes