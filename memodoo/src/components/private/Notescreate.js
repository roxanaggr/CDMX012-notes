import React from 'react';
import Navbargreen from './Navbargreen';
import Notesform from './Notesform';

function Notescreate() {

  return (
    <div className="Notes-builder">
      <section><Navbargreen /></section>
      <section><Notesform /></section>
    </div>
  )
}

export default Notescreate