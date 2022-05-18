import React, {useState,useEffect} from 'react';
import '../../App.css';
import { Navbar } from './Navbar';
import { Newnotebutton } from './Newnotebutton'
import { db, collectionRef, getDocs} from '../../lib/firestore';
import { getUserLogged } from '../../lib/firebase';
import { query, orderBy, deleteDoc, doc, where} from 'firebase/firestore';

function Notes()
{

    //console.log(getUserLogged)

    const user = getUserLogged();
    const userName = user.displayName;
    const userEmail = user.email;

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        const querySnapshot = await getDocs(query (collectionRef, orderBy('date', 'desc'), where('email', "==", userEmail)));
        setNotes(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        if (userEmail) {
            console.log(notes)
            console.log(notes.email)
        }
    }

    useEffect(() => {
        getNotes();
    }, []);
    
    /*useEffect(() => {
        //const { uid } = userID;
        async function fetchData() {
            const getNotes = await getDocs(query (collectionRef, orderBy('date', 'desc')));
            setNotes(getNotes.docs.map(doc => ({ ...doc.data(), id: doc.id})));
           /*  if ( userEmail ) {
                console.log(notes)  
            }
        }
        fetchData(); 
    }, []);*/

   const handleDeleteNote = async (id) => {
        const idRef = doc(db, 'notes', id);
        await deleteDoc(idRef);
      }


    return (
        <div className="Notes">
            <section><Navbar /></section>
            <section className='float'><Newnotebutton /></section>
            <section className="Notes-container">
                <section className='welcome-title'>
                    <h1>Hello, {userName}!</h1>
                    <h2>Welcome to your notes dashboard</h2>
                </section>
                <section className="allCards">
                    {notes.map((notes)=>{
                        return  <article className="card" key={notes.id}>
                        <section className="card-header"><h3>{notes.title}</h3>
                        <button className="edit-button">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        </section>
                        <p>{notes.content}</p>
                        <p></p>
                        <button className="delete-button" type='submit' onClick={()=>{handleDeleteNote(notes.id);}}>
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                        </article>
                    })}
                </section>
            </section>
        </div>
    );
}
export default Notes;