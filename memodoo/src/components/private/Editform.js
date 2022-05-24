import React, {useEffect, useState} from 'react';
import { Cancelnote } from './Cancelnote';
import '../../App.css';
import { db, updateDoc, doc, getDoc } from '../../lib/firestore';
import { useNavigate, useParams } from 'react-router-dom';

function Editform() {

  const thisNote = {
    title: '',
    content: ''
  }

  const [updateNote, setupdateNote] = useState(thisNote);
  let navigate = useNavigate();
  const {id} = useParams();

  const getNotesId = async (id) => {
    const docRef = doc(db, 'notes', id);
    const docSnap = await getDoc(docRef);
    setupdateNote(docSnap.data());
  };

     useEffect (() => {
      getNotesId(id);
    }, [id]);

   const editNote = async (id) => {
    const docRef = doc(db, 'notes', id);
      await updateDoc(docRef, updateNote)
      navigate('/Notes')
    }


  return (
    <div>
        <h2>Editing your note</h2>
        <section className='new-note-container'>
            <section>
                <form className='form-note'>
                    <input type="text" id="title"
                    name="title"
                    placeholder="Your note's title"
                    value={updateNote.title}
                    onChange ={(e) => {setupdateNote({...updateNote, title: e.target.value })}}>
                    </input>
                    <textarea id="note"
                    name="content"
                    placeholder="Type your note!"
                    value={updateNote.content}
                    onChange ={(e) => {setupdateNote({...updateNote, content: e.target.value })}}>
                    </textarea>
                </form>
                  <form className='actions-note'>
                  <Cancelnote/>
                    <button type="submit" onClick={()=>{editNote(id)}}>
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                </form>
            </section>
        </section>
    </div>
  )
}

export default Editform