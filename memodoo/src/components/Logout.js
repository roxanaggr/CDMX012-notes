import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export function LogOut() {

 const navigate = useNavigate();

  const handleSignOut =  () => {
    signOut(auth).then(() => {
      navigate ('/')
    }).catch((error) => {
      // An error happened.
    });
  }
      return (
        <div className="logout-button">
           <button onClick={handleSignOut} className="btn-logout">Log Out</button>
        </div>
      );
    }
    export default LogOut;
