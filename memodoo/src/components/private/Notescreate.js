import React from 'react';
import { Navbargreen } from './Navbargreen';
import { Savenote } from './Savenote';
import { Cancelnote } from './Cancelnote';
import '../../App.css';

export function Notescreate() {
  return (
    <div className="Notes-builder">
      <section><Navbargreen /></section>
      <h2>Create a new memo and save it for later</h2>
      <section className='new-note-container'>
      <section>
        <form className='form-note'>
          <input type="text" id="title" name="note-title" placeholder="Your note's title"></input>
          <textarea id="note" name="note" placeholder="Type your note!"></textarea>
        </form>
        <aside className='actions-note'>
          <Savenote/>
          <Cancelnote/>
        </aside>
      </section>
    </section>
    </div>
  )
}

export default Notescreate