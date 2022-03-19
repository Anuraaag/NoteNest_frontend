import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = props => {

    const { notes } = useContext(NoteContext)

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