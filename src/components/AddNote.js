import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext, useState } from 'react'

const AddNote = () => {

    const {createNote} = useContext(NoteContext)

    const [note, setNote] = useState({title: "", description: "", tag: "general"})
    const updateValue = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
        // this syntax means, "keep the note as it is" but overwrite any value that is changed.
        // So here, if title is changed, the e.target.name will be equal to "title". 
        // And "title" is already a property in the note object. So its value will be used to update our note object
    }

    return (
        <div className='container my-3'>
            <h2>Add a Note</h2>
            <div className="mb-3 mt-4 d-flex justify-content-between">
                <input type="text" className="form-control col-md-6 d-inline-block" id="title" value={note.title} name="title" onChange={updateValue} placeholder="Note Title" />
                <input type="text" className="form-control col-md-5 d-inline-block" id="tag" name="tag" value={note.tag} onChange={updateValue} placeholder="Note Tag" />
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="description" name="description" rows="3" value={note.description} onChange={updateValue} placeholder="Enter note" ></textarea>
            </div>

            <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={() => {createNote(note); setNote({title: "", description: "", tag: ""}) }}>Add Note</button>

        </div>
    )
}

export default AddNote