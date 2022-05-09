import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../lib/auth/Auth';

export function SignOut () 
{

  const navigate = useNavigate();
  const handleLogOut = () =>  {
    logOut(navigate);
    //navigate ('/')
  }

      return (
        <div className="logout-button">
           <button onClick={handleLogOut} className="btn-logout">Log Out</button>
        </div>
      );
    }
    export default SignOut;
