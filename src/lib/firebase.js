import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDsA9-I7lqFyROVJ9D17JbVM_afni45ZyE",
    authDomain: "memodoo.firebaseapp.com",
    projectId: "memodoo",
    storageBucket: "memodoo.appspot.com",
    messagingSenderId: "239187329414",
    appId: "1:239187329414:web:b8a5cb751e92942588ec07"
};

//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default app
//Authentication 
export const auth = getAuth(app);

export const getUserLogged = () => {
    const user = auth.currentUser;
    // const userName = user.displayName;
    return user;
  }
