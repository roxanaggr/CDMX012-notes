import React, {useEffect, useState} from 'react';
import Navbargreen from './Navbargreen';
import { Cancelnote } from './Cancelnote';
import { useNavigate, useParams } from 'react-router-dom';
import '../../App.css';
import { db, doc, getDoc, setDoc } from '../../lib/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { auth } from '../../lib/firebase';

function Notesedit() {

 

  const thisNote = {
    title: '',
    content: '',
    email: auth.currentUser.email,
    date: serverTimestamp(),
  }
  

  const [updateNote, setupdateNote] = useState(thisNote);
  let navigate = useNavigate();
  const {id} = useParams();

 /*  const docRef = doc(db, 'notes', id);
  const docSnap = getDoc(docRef);
  console.log(docSnap.data()) */

  const getNotesId = async () => {
    try {
      const docRef = doc(db, 'notes',id);
      const docSnap = await getDoc(docRef, id);
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
    const docRef = doc(db, 'notes', id);
    await setDoc(docRef, updateNote, {
        email: auth.currentUser.email,
        date: serverTimestamp(),
    }, {merge: true
    }).then(navigate ('/Notes'))
    }

  return (
    <div className="Notes-builder">
      <section><Navbargreen /></section>
      <section>
        <div>
          <h2>Editing your note</h2>
            <section className='new-note-container'>
              <section>
                
                <form className='form-note' onSubmit={(e)=>{handleEditNote(e)}} >
                    <input type="text" id="title"
                    name="title"
                    //placeholder="Your note's title"
                    value={updateNote.title}
                    onChange ={(e) => {setupdateNote({...updateNote, title: e.target.value })}}>
                    </input>
                    <textarea id="note"
                    name="content"
                    //placeholder="Type your note!"
                    value={updateNote.content}
                    onChange ={(e) => {setupdateNote({...updateNote, content: e.target.value })}}>
                    </textarea>
                    <section className='actions-note'>
                  <Cancelnote/>
                    <button type='submit'>
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                </section>
                </form>
                  
                
            </section>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Notesedit