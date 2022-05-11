import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export function Newnotebutton() {
  return (
        <Link to='/Notescreate'>
        <i className='fa-solid fa-circle-plus'></i>
        </Link>
  )
}

export default Newnotebutton