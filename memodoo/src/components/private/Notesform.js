import React, { useState } from 'react';
import { Cancelnote } from './Cancelnote';
import '../../App.css';

export function Notesform(props) {

    const [notes, setNotes] = useState({
        notetitle: '',
        note: ''
      });
    
    const inputValues = e => {
        const {name, value} = e.target;
        //copia los valores actuales y el input que estes actualizando colóca el valor que se esta escribiendo
        setNotes({...notes, [name]:value});
      }

      const handleNewNote = e => {
        e.preventDefault();
        props.addNote(notes);
      } 

  return (
    <div>
        <h2>Create a new memo and save it for later</h2>
        <section className='new-note-container'>
            <section>
                <form className='form-note'>
                    <input type="text" id="title" name="notetitle" placeholder="Your note's title" onChange={inputValues}></input>
                    <textarea id="note" name="note" placeholder="Type your note!" onChange={inputValues}></textarea>
                </form>
                <aside className='actions-note'>
                    <button onClick={handleNewNote}>
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                    <Cancelnote/>
                </aside>
            </section>
        </section>
    </div>
  )
}

export default Notesform