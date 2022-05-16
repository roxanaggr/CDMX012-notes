import React, {useState,useEffect} from 'react';
import '../../App.css';
import { Navbar } from './Navbar';
import { Newnotebutton } from './Newnotebutton'
import { collectionRef, getDocs } from '../../lib/firestore';


function Notes()
{
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const getNotes = await getDocs(collectionRef);
        //console.log(getNotes)
        setNotes(getNotes.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        fetchData();
    }, []);

    return (
        <div className="Notes">
            <section><Navbar /></section>
            <section className='float'><Newnotebutton /></section>
            <section className="Notes-container">
                <section className="allCards">
                    {notes.map((notes)=>{
                        return  <article className="card">
                        <section className="card-header"><h3>{notes.title}</h3>
                        <button>Edit</button>
                        </section>
                        <p>{notes.content}</p>
                        <button>Delete</button>
                        </article>
                    })}
                </section>
            </section>
        </div>
    );
}
export default Notes;