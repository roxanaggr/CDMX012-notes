import '../../App.css';
import { googleSignIn } from '../../lib/auth/Auth';
import { useNavigate } from "react-router-dom";

function GoogleSignIn() {

  const navigate = useNavigate();
  const handleSignIn = () =>  {
    googleSignIn(navigate);
    //navigate ('/Notes')
  }

    return (
      <div className="intro-buttons"> 
        <button className="btn-register" onClick={handleSignIn}>Log In with Google</button>
      </div>
    );
  }
  export default GoogleSignIn;