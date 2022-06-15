import React from 'react';
import logo from '../../img/logos/logo-white-h.svg';
import '../../App.css';
import { SignOut } from './Logout';

export function Navbargreen() {
  return (
    <section className="Newnote-header">
        <img src={logo} className="logo-notes" alt="logo" />
    </section>
  )
}

export default Navbargreen