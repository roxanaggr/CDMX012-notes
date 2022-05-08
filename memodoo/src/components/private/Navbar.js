import React from 'react';
import logo from '../../img/logos/logo-color-h.svg';
import '../../App.css';
import { SignOut } from './Logout';

export function Navbar() {
  return (
    <section className="Notes-header">
        <img src={logo} className="logo-notes" alt="logo" />
        <aside><SignOut /></aside>
    </section>
  )
}

export default Navbar