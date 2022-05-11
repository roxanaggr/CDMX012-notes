import React from 'react';
import logo from '../../img/logos/logo-white-v.svg';
import '../../App.css';
import GoogleSignIn from './Googleauth'; 
import { Link } from 'react-router-dom';

export function Home()
{
    return (
        <div className="Home">
            <section className="Home-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                Never forget a thing!
                </h1>
                <section className="Home-content">
                    <p>
                    Memodoo is a simple app to take notes for boosting your creative and productive self.
                    </p>
                    <GoogleSignIn/>
                    <h2>
                    <Link to='/Signup'>Or sign up with another email account</Link> 
                    </h2>
                    <section className='section-signin'>
                    <h2><Link to='/Signin'>Already registered with another email?<br/>Click here to login</Link> </h2>
                    </section>
                    
                </section>
            </section>
        </div>
    );
}

export default Home;