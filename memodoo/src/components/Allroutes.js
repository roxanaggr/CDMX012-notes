import { Routes, Route } from 'react-router-dom';
import Home from './public/Home';
import SignIn from './public/Signin';
import SignUp from './public/Signup';
import Notes from './private/Notes'
import Notescreate from './private/Notescreate'
import { googleSignIn } from '../lib/auth/Auth';

function Allroutes({isAuth}) {

    return (
            /*<Routes>
                  <Route path='/Notes' element={<Notes />}/>
                  <Route path='/Notescreate' element={<Notescreate />}/>
                  <Route path='/' element={<Home googleSignIn={googleSignIn} />}/>
                  <Route path='/Signin' element={<SignIn />}/>
                  <Route path='/Signup' element={<SignUp />}/>
            </Routes>*/
       <div>
      {isAuth?
            <Routes>
                  <Route path='/Notes' element={<Notes />}/>
                  <Route path='/Notescreate' element={<Notescreate />}/>
            </Routes>:
            <Routes>
                  <Route path='/' element={<Home googleSignIn={googleSignIn} />}/>
                  <Route path='/Signin' element={<SignIn />}/>
                  <Route path='/Signup' element={<SignUp />}/>
            </Routes>}
      </div>
    )
  }
  
  export default Allroutes
    
    // 
    
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //      setAuth(user)
    //     //const uid = user.uid;
    //     } else {
    //     setAuth(null)
    //     }
    //   })
    //{isAuth ? <Route path ='/' element = {<Notes logout={logOut}/>}></Route>:<>
