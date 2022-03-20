import { useState } from "react"
import NoteContext from "./NoteContext"

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "6232c66ef3ea02867e67c591",
            "user": "62329ff2bcbd5ecb6c4b1a49",
            "title": "note3 updated",
            "description": "Note3 description updated is here",
            "tag": "testing",
            "date": "2022-03-17T05:26:06.530Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    const createNote = (note_param) => {
        const note = {
            "_id": "6232c6c75c0974cf2c9c133452",
            "user": "62329ff2bcbd5ecb6c4b1a49",
            "title": note_param.title,
            "description": note_param.description,
            "tag": note_param.tag,
            "date": "2022-03-17T05:27:35.679Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    const updateNote = (note) => {

        const updateNoteIndex = notes.findIndex((noteElement) => noteElement._id === note._id)
        const notesCopy = [...notes]
        notesCopy[updateNoteIndex] = note
        setNotes(notesCopy)
    }

    const deleteNote = (noteId) => {
        setNotes(notes.filter(note => note._id !== noteId))
    }


    return (
        <NoteContext.Provider value={{ notes, createNote, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

/*
Description: 

> Using createContext method from react library, we are able to create an object that can help in setting global variables.
> So we create this object and make it available from NoteContext.js
> Next NoteState.js creates a state with the wannabe global variables. And returns the NoteContext.Provider component with these values.
> Next, we enclose the App.js' return block inside the NoteState Component.
> Now, if we observe the NoteState's return value, we realise that the whole component tree in App.js is enclosed in NoteContext.Provider and also the value passed in this component are avalible throughout the tree.
> Any component can now use the variables & functions passed in the NoteContext.Provider. And they must import it, as they use it.
*/