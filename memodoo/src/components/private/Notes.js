import React, {useState,useEffect} from 'react';
import '../../App.css';
import { Navbar } from './Navbar';
import { Newnotebutton } from './Newnotebutton'
import { db, collectionRef, getDocs } from '../../lib/firestore';
import { query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { auth } from '../../lib/firebase'

function Notes()
{

    const user = auth.currentUser;
    const name = user?.displayName;
    const userPhoto = user?.photoURL;
    
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const getNotes = await getDocs(query (collectionRef, orderBy('date', 'desc'))); 
            setNotes(getNotes.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        fetchData(); 
    }, []);

    async function onDelete (id) {
        const idRef = doc(db, 'notes', id);
        await deleteDoc(idRef);
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
                        <button type='submit' onClick={onDelete}>Delete</button>
                        </article>
                    })}
                </section>
            </section>
        </div>
    );
}
export default Notes;