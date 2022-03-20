// check if response value is fine

import { useState } from "react"
import NoteContext from "./NoteContext"

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const [notes, setNotes] = useState([])
    const auth_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMjlmZjJiY2JkNWVjYjZjNGIxYTQ5In0sImlhdCI6MTY0NzQ5NDM5NX0.EI7CJfLoI-qb4341dGzpKNcM1QWEpEl5qN4g3z1Ob8k`


    const queryDatabaseWithoutBody = async (url, method) => {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth_token
            }
        })
        return response
    }

    const queryDatabaseWithBody = async (url, data, method) => {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth_token
            },
            body: JSON.stringify(data)
        })
        return response
    }


    const fetchAllNotes = async () => {

        // (async () => {
        //     const url = `${host}/api/note/fetch`
        //     const response = await queryDatabaseWithoutBody(url, `GET`)
        //     const fetchedNotes = await response.json()
        //     setNotes(fetchedNotes.notes)
        // })()

        const url = `${host}/api/note/fetch`
        const response = await queryDatabaseWithoutBody(url, `GET`)
        const fetchedNotes = await response.json()
        setNotes(fetchedNotes.notes)
    }

    const createNote = (note_param) => {

        (async () => {
            const url = `${host}/api/note/create`
            const response = await queryDatabaseWithBody(url, note_param, `POST`)
            await fetchAllNotes()
        })()

        // const url = `${host}/api/note/create`
        // const response = await queryDatabaseWithBody(url, note_param, `POST`)
        // fetchAllNotes()


        // logic for hard data
        // const note = {
        //     "_id": "6232c6c75c0974cf2c9c133452",
        //     "user": "62329ff2bcbd5ecb6c4b1a49",
        //     "title": note_param.title,
        //     "description": note_param.description,
        //     "tag": note_param.tag,
        //     "date": "2022-03-17T05:27:35.679Z",
        //     "__v": 0
        // }
        // setNotes(notes.concat(note))
    }

    const updateNote = async (note) => {

        // (async () => {
        //     const url = `${host}/api/note/update/${note._id}`
        //     const data = {
        //         "title": note.title,
        //         "description": note.description,
        //         "tag": note.tag
        //     }
        //     const response = await queryDatabaseWithBody(url, data, `PUT`)
        //     await fetchAllNotes()
        // })()

        const url = `${host}/api/note/update/${note._id}`
        const data = {
            "title": note.title,
            "description": note.description,
            "tag": note.tag
        }
        const response = await queryDatabaseWithBody(url, data, `PUT`)
        await fetchAllNotes()

        // logic for hard data
        // const updateNoteIndex = notes.findIndex((noteElement) => noteElement._id === note._id)
        // const notesCopy = [...notes]
        // notesCopy[updateNoteIndex] = note
        // setNotes(notesCopy)
    }

    const deleteNote = (noteId) => {

        (async () => {
            const url = `${host}/api/note/delete/${noteId}`
            const response = await queryDatabaseWithoutBody(url, `DELETE`)
            await fetchAllNotes()
        })()

        // logic for hard data
        // setNotes(notes.filter(note => note._id !== noteId))
    }


    return (
        <NoteContext.Provider value={{ fetchAllNotes, notes, createNote, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState