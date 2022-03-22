import { useState } from "react"
import NoteContext from "./NoteContext"

const NoteState = (props) => {

    const host = process.env.REACT_APP_HOSTPORT
    const [notes, setNotes] = useState([])
    const auth_token = localStorage.getItem('token')


    const queryDatabaseWithoutBody = async (url, method) => {

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token
                }
            })
            return response

        } catch (error) {
            console.log(error)
        }
    }

    const queryDatabaseWithBody = async (url, data, method) => {

        try {

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token
                },
                body: JSON.stringify(data)
            })
            return response
        } catch (error) {
            console.log(error)
        }
    }


    const fetchAllNotes = async () => {

        // (async () => {
        //     const url = `${host}/api/note/fetch`
        //     const response = await queryDatabaseWithoutBody(url, `GET`)
        //     const fetchedNotes = await response.json()
        //     setNotes(fetchedNotes.notes)
        // })()
        try {


            const url = `${host}/api/note/fetch`
            const response = await queryDatabaseWithoutBody(url, `GET`)
            const json = await response.json()
            const notes = json.payload.data
            setNotes(notes)
        } catch (error) {
            console.log(error)
        }
    }

    const createNote = (note_param) => {
        try {


            (async () => {
                const url = `${host}/api/note/create`
                const response = await queryDatabaseWithBody(url, note_param, `POST`)
                if (response) await fetchAllNotes()
            })()
        } catch (error) {
            console.log(error)
        }
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

        try {


            const url = `${host}/api/note/update/${note._id}`
            const data = {
                "title": note.title,
                "description": note.description,
                "tag": note.tag
            }
            const response = await queryDatabaseWithBody(url, data, `PUT`)
            if (response) await fetchAllNotes()
        } catch (error) {
            console.log(error)
        }
        // logic for hard data
        // const updateNoteIndex = notes.findIndex((noteElement) => noteElement._id === note._id)
        // const notesCopy = [...notes]
        // notesCopy[updateNoteIndex] = note
        // setNotes(notesCopy)
    }

    const deleteNote = (noteId) => {
        try {

            (async () => {
                const url = `${host}/api/note/delete/${noteId}`
                const response = await queryDatabaseWithoutBody(url, `DELETE`)
                if (response) await fetchAllNotes()
            })()
        } catch (error) {
            console.log(error)
        }
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