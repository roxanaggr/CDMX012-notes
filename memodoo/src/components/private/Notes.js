import React, {useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import '../../App.css';
import { Navbar } from './Navbar';
import { Newnotebutton } from './Newnotebutton'
import { db, collectionRef } from '../../lib/firestore';
import { getUserLogged } from '../../lib/firebase';
import { query, orderBy, deleteDoc, doc, where, onSnapshot} from 'firebase/firestore';
import swal from 'sweetalert';

function Notes()
{

    let navigate = useNavigate();
    const user = getUserLogged();
    const userName = user.displayName;
    const userEmail = user.email;


    const [notes, setNotes] = useState([]);

   /*  const getNotes = async (props) => {
        const querySnapshot = await getDocs(query (collectionRef, orderBy('date', 'desc'), where('email', "==", userEmail)));
        setNotes(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    } */
    
    const getNotes = () => {
        const q = query(collectionRef, orderBy('date', 'desc'), where('email', "==", userEmail));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setNotes(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    });
    }

    useEffect(() => {
        getNotes();
    }, []);

   const handleDeleteNote = async (id) => {
    const idRef = doc(db, 'notes', id);
    await deleteDoc(idRef);
    
    /* swal({
        text: 'Are you sure you want to delete?',
        value: true,
        reverseButtons: true,
        buttons: ['Yes', 'No'],
        backdrop: ` rgba(0, 0, 0, 0.70)`,
    
    }).then(async result => {
        if (result === 'Yes') {
            console.log('Deleted')
            await deleteDoc(idRef);
        }
    }) */
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
                            {/* <button className="edit-button" onClick={() => navigate(`/Notesedit`)}> */}
                             <button className="edit-button" onClick={() => navigate(`/Notesedit/${notes.id}`)}>
                                <i className="fa-regular fa-pen-to-square"></i>
                            </button>   
                        </section>
                        <p>{notes.content}</p>
                        <p></p>
                        <button className="delete-button" type='submit' onClick={()=>{handleDeleteNote(notes.id);}}>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                        </article>
                    })}
                </section>
            </section>
        </div>
    );
}
export default Notes;