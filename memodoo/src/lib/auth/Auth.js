import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
     } from 'firebase/auth'



export const googleSignIn = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      //console.log (result)
      navigate ('/Notes')
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    //const user = result.user;
    }).catch((error) => {
    //const credential = GoogleAuthProvider.credentialFromError(error);
  });

}

export const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
}

    //Log Out Function for later
export const logOut = (navigate) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate ('/')
      }).catch((error) => {
        // An error happened.
      }); 
}

