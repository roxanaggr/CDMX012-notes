import React, {useState,useEffect} from 'react';
import '../../App.css';
import { Navbar } from './Navbar';
import { Newnotebutton } from './Newnotebutton'
import { db, collectionRef, getDocs } from '../../lib/firestore';
import { query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { auth } from '../../lib/firebase'

function Notes()
{

    const userID = auth.currentUser;
    const name = userID.displayName;
    const userPhoto = userID.photoURL;

    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        const { uid } = userID;
        async function fetchData() {
            const getNotes = await getDocs(query (collectionRef, orderBy('date', 'desc')));
            setNotes(getNotes.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            /* if ( userID === doc.id ) { 
            } */  
        }
        fetchData(); 
    }, []);

   const handleDeleteNote = async (id) => {
        const idRef = doc(db, 'notes', id);
        await deleteDoc(idRef);
        console.log(idRef)
      }


    return (
        <div className="Notes">
            <section><Navbar /></section>
            <section className='float'><Newnotebutton /></section>
            <section className="Notes-container">
                <section className="allCards">
                    {notes.map((notes)=>{
                        return  <article className="card" key={notes.id}>
                        <section className="card-header"><h3>{notes.title}</h3>
                        <button>Edit</button>
                        </section>
                        <p>{notes.content}</p>
                        <p></p>
                        <button type='submit' onClick={()=>{handleDeleteNote(notes.id);}}>Delete</button>
                        </article>
                    })}
                </section>
            </section>
        </div>
    );
}
export default Notes;