import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { Navbar } from './Navbar';
import { Newnotebutton } from './Newnotebutton'
import { db, collectionRef } from '../../lib/firestore';
import { getUserLogged } from '../../lib/firebase';
import { query, orderBy, deleteDoc, doc, where, onSnapshot} from 'firebase/firestore';
import Swal from "sweetalert2";

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
    }

        const confirmDeleteNote = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "Your note will be deleted forever!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#10B76F",
                cancelButtonColor: "#BDBDBD",
                confirmButtonText: "Yes, i want to delete it.",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDeleteNote(id);
                    Swal.fire("Done!", "Your note has been deleted.");
            }
          });
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
                        <button className="delete-button" type='submit' onClick={()=>{confirmDeleteNote(notes.id);}}>
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