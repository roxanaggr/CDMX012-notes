import React from 'react';
import logo from '../img/logos/logo-white-h.svg';
import GoogleSignIn from './Googleauth';
import '../App.css';
import { createUser } from '../auth/Auth';

export function SignIn() {

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
        <p>Or</p>
        <GoogleSignIn/>
      </section>
    </div>
  );
};

export default SignIn;
