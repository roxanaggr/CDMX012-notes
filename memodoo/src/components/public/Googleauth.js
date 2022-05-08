import '../../App.css';
import { googleSignIn } from '../../lib/auth/Auth';
//import { useNavigate } from "react-router-dom";

export function GoogleSignIn() {

  //const navigate = useNavigate();

    return (
      <div className="intro-buttons"> 
        <button className="btn-register" onClick={googleSignIn}>Log In with Google</button>
      </div>
    );
  }
  export default GoogleSignIn;