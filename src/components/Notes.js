import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'

const Notes = () => {

    let { notes, fetchAllNotes } = useContext(NoteContext)
    const navigate = useNavigate()

    useEffect( () => {
        if(localStorage.getItem('token')){  // Make a fetch request only if a token is present. If the token is tampered the server will anyway handle it
            (async () => { await fetchAllNotes() })()
        }
        else{
            navigate('/login')
        }
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <AddNote />

            <div className='container my-5'>
                <h2>My Notes</h2> <p>{notes.length===0 && 'No notes to display'}</p>
                <div className='row'>
                    {notes.map(note => {
                        return <NoteItem note={note} key={note._id} />
                    })}

                </div>
            </div>
        </>
    )
}

export default Notes