import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../lib/auth/Auth';

export function SignOut () 
{

  const navigate = useNavigate();
  const handleLogOut = () =>  {
    logOut(navigate);
    //navigate ('/Notes')
  }

      return (
        <div className="logout-button">
           <button onClick={handleLogOut} className="btn-logout">
             <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
        </div>
      );
    }
    export default SignOut;
