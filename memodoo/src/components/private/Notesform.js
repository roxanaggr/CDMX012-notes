import React, { useState, useEffect} from 'react';
import { Cancelnote } from './Cancelnote';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { db, collection, addDoc } from '../../lib/firestore';


function Notesform(props) {

  const addNote = async (notes) => {
    const collectionRef = collection(db, 'notes');
    try {
      await addDoc(collectionRef, notes);
      console.log('A note is saved');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

    const [notes, setNotes] = useState({
        title: '',
        content: ''
      });

    /*   useEffect (() => {
        addNote();
      }, []);
     */

  
    const inputValues = e => {
        const {name, value} = e.target;
        //copia los valores actuales y el input que estes actualizando colóca el valor que se esta escribiendo
        setNotes({...notes, [name]:value});
      }

      let navigate = useNavigate();

      const handleNewNote = e => {
        e.preventDefault();
        addNote(notes)
        navigate ('/Notes');

      }

  return (
    <div>
        <h2>Create a new memo and save it for later</h2>
        <section className='new-note-container'>
            <section>
                <form className='form-note'>
                    <input type="text" id="title" name="title" placeholder="Your note's title" value={notes.title}  onChange={inputValues}></input>
                    <textarea id="note" name="content" placeholder="Type your note!" value={notes.content} onChange={inputValues}></textarea>
                </form>
                  <form className='actions-note'>
                    <button type="submit" onClick={handleNewNote}>
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                    <Cancelnote/>
                </form>
            </section>
        </section>
    </div>
  )
}

export default Notesform