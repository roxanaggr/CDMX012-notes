import React from 'react';
import logo from '../img/logos/logo-color-h.svg';
import { LogOut } from './Logout';
import '../App.css';



export function Notes()
{
    return (
        <div className="Notes">
            <section className="Notes-header">
                <img src={logo} className="logo-notes" alt="logo" />
                <aside><LogOut /></aside>
            </section>
            <section className="Notes-container">
                <section className="allCards">
                    <article className="card">
                        <section className="card-header"><h3>Title One</h3>
                        <button>Edit</button>
                        </section>
                        <p>Content for first note</p>
                        <button>Delete</button>
                    </article>
                    <article className="card">
                        <section className="card-header"><h3>Title Two</h3>
                        <button>Edit</button>
                        </section>
                        <p>Second note all of the content</p>
                        <button>Delete</button>
                    </article>
                    <article className="card">
                        <section className="card-header"><h3>Title Three</h3>
                        <button>Edit</button>
                        </section>
                        <p>Third one note, this is the content</p>
                        <button>Delete</button>
                    </article>
                </section>
            </section>
        </div>
    );
}
export default Notes;