import { Routes, Route } from 'react-router-dom';
import Home from './public/Home';
import SignIn from './public/Signin';
import SignUp from './public/Signup';
import Notes from './private/Notes'
import Notescreate from './private/Notescreate'
import { googleSignIn } from '../lib/auth/Auth';

function Allroutes({isAuth}) {

    return (
            <Routes>
                  <Route path='/Notes' element={<Notes />}>
                  </Route><Route path='/Notescreate' element={<Notescreate />}>
                  </Route>
                  <Route path='/' element={<Home googleSignIn={googleSignIn} />}>
                  </Route><Route path='/Signin' element={<SignIn />}>
                  </Route><Route path='/Signup' element={<SignUp />}>
                  </Route> 
            </Routes>
      /* <div>
      {isAuth?
            <Routes>
                  <Route path='/Notes' element={<Notes />}></Route>
                  <Route path='/Notescreate' element={<Notescreate />}></Route>
            </Routes>:
            <Routes>
                  <Route path='/' element={<Home googleSignIn={googleSignIn} />}>
                  </Route><Route path='/Signin' element={<SignIn />}>
                  </Route><Route path='/Signup' element={<SignUp />}>
                  </Route> 
            </Routes>}
      </div>  */
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
