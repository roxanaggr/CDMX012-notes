import React from 'react';
import logo from '../../img/logos/logo-white-h.svg';
import '../../App.css';
import { createUser } from '../../lib/auth/Auth';
//import { Link } from 'react-router-dom';

function SignIn() {

  return (
    <div className="Signin">
      <section className="Signin-header">
        <img src={logo} className="logo-vertical" alt="logo-vertical" />
        <h2>
        Welcome back!
        </h2>
        <form className = "signinform">
            <input type="email" id="email" name="lname" placeholder="Email"></input>
            <input type="password" id="password" name="lname" placeholder="Password"></input>
            <button onClick={createUser}>Continue with Email</button>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
