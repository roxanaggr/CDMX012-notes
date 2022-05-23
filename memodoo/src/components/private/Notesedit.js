import React, {useEffect, useState} from 'react';
import Navbargreen from './Navbargreen';
import { Cancelnote } from './Cancelnote';
import { useNavigate, useParams } from 'react-router-dom';
import '../../App.css';
import { db, updateDoc, doc, getDoc, collection } from '../../lib/firestore';

function Notesedit() {

  const thisNote = {
    title: '',
    content: ''
  }

  const [updateNote, setupdateNote] = useState(thisNote);
  let navigate = useNavigate();
  const {id} = useParams();


 /*  const getNotesId = async (id) => {
    const docRef = doc(db, 'notes', id);
    const docSnap = await getDoc(docRef);
    setupdateNote(docSnap.data());
  }; */

  const getNotesId = async (id) => {
    try {
      const collectionRef = collection(db, 'notes');
      const docSnap = await getDoc(collectionRef, id);
      setupdateNote(docSnap.data())
    } catch (e) {
      console.error(e);
    }
  }

     useEffect (() => {
       getNotesId();
    }, []);

   const handleEditNote = async (e) => {
    e.preventDefault();
    getNotesId();
    const collectionRef = collection(db, 'notes', id);
    await updateDoc(collectionRef, updateNote)
    }

  return (
    <div className="Notes-builder">
      <section><Navbargreen /></section>
      <section>
        <div>
          <h2>Editing your note</h2>
            <section className='new-note-container'>
              <section>
                
                <form className='form-note'>
                    <input type="text" id="title"
                    name="title"
                    placeholder="Your note's title"
                    value={updateNote.title}
                    onChange ={(e) => {setupdateNote({title: e.target.value })}}>
                    </input>
                    <textarea id="note"
                    name="content"
                    placeholder="Type your note!"
                    value={updateNote.content}
                    onChange ={(e) => {setupdateNote({content: e.target.value })}}>
                    </textarea>
                </form>
                  <form className='actions-note'>
                  <Cancelnote/>
                    <button onClick={()=>{handleEditNote(id)}}>
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                </form>
                
            </section>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Notesedit