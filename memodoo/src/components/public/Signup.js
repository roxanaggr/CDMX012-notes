import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logos/logo-color-h.svg';
import '../../App.css';
import { createUser } from '../../lib/auth/Auth';


function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState ('');
  const navigate = useNavigate();


 const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      await createUser (email, password);
      navigate ('/Notes')
    }catch (e) {
      setError(error.message);
      console.log(error.message);
    }
  }

  return (
    <div className="Signup">
      <section className="Signup-header">
        <img src={logo} className="logo-vertical" alt="logo-vertical" />
        <h2>
        Sign up for free to create your first notes!
        </h2>
        <form className = "signupform">
            <input onChange={(e) => setEmail(e.target.value)} type="email"  id="email" name="lname" placeholder="Email"></input>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="lname" placeholder="Password"></input>
            <button onClick={handleSubmit}>Continue with Email</button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
