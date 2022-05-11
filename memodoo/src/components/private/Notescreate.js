import React from 'react';
import Navbargreen from './Navbargreen';
import Notesform from './Notesform';
import { db, collection, addDoc } from '../../lib/firestore';

export function Notescreate() {

  const addNote = async (notesObject) => {
    try {
      const docRef = await addDoc(collection(db, 'notes'), {
        notesObject
      });
      console.log('A note is saved', docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  return (
    <div className="Notes-builder">
      <section><Navbargreen /></section>
      <section><Notesform addNote={addNote} /></section>
    </div>
  )
}

export default Notescreate