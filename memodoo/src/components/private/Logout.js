import React from 'react';
import '../../App.css';
import { logOut } from '../../lib/auth/Auth';

export function SignOut () 
{

//  const navigate = useNavigate();
// const handleSignOut =  () => {
//     signOut(auth).then(() => {
//       //navigate ('/')
//     }).catch((error) => {
//       // An error happened.
//     });
//   }

      return (
        <div className="logout-button">
           <button onClick={logOut} className="btn-logout">Log Out</button>
        </div>
      );
    }
    export default SignOut;
