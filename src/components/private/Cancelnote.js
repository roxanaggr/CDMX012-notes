import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export function Cancelnote() {
  return (
        <Link to='/Notes'>
        <i className='fa-solid fa-circle-xmark'></i>
        </Link>
  )
}

export default Cancelnote