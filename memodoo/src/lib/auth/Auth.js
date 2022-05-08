import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
     } from 'firebase/auth'

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
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
export const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      }); 
}

