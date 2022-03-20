import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {

    let { notes, fetchAllNotes } = useContext(NoteContext)

    useEffect(async () => {
        await fetchAllNotes()
    }, [])

    return (
        <>
            <AddNote />

            <div className='container my-5'>
                <h2>My Notes</h2>
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