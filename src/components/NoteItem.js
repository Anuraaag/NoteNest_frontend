import React from 'react'
// import AlertContext from '../context/alert/AlertContext'
import { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'


const NoteItem = (props) => {
    const { note } = props
    const { deleteNote, updateNote } = useContext(NoteContext)

    const [noteState, setNoteState] = useState(note) //creating the stateValue. The above note variable has the note fetched from the db
    const updateValue = (e) => {
        setNoteState({...noteState, [e.target.name]: e.target.value})
        // this syntax means, "keep the note as it is" but overwrite any value that is changed.
        // So here, if title is changed, the e.target.name will be equal to "title". 
        // And "title" is already a property in the note object. So its value will be used to update our note object
    }

    // const showAlert = useContext(AlertContext).showAlert
    return (
        <>
            <div className='col-md-4 my-3'>
                <div className="card" >
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title">{note.title}</h5>
                            <div>
                                <i className="fa-solid fa-pen-to-square m-1 mx-2 text-warning" data-toggle="modal" data-target={`#${note._id}`}></i>

                                {/*onClick={showAlert("hello", "success")}*/}

                                <i className="fa-solid fa-trash-can m-1 mx-2 text-danger" onClick={() => { deleteNote(note._id) }}></i>
                                {/* Wrapped the function call in an anonymous function, to prevent it from being called.
                            React tends to calls it instantly w/o a click event, bacause an argument is sent. */}
                            </div>
                        </div>
                        <p className="card-text">{note.description}</p>

                    </div>
                </div>
            </div>

            {/*Update Modal */}
            <div className="modal fade" id={note._id} tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 mt-4 d-flex justify-content-between">
                                <input type="text" className="form-control col-md-6 d-inline-block" id="title" name="title" placeholder="Note Title" value={noteState.title} onChange={updateValue} />
                                <input type="text" className="form-control col-md-5 d-inline-block" id="tag" name="tag" placeholder="Note Tag" value={noteState.tag} onChange={updateValue} />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="description" name="description" rows="5" placeholder="Enter note" value={noteState.description} onChange={updateValue} ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {setNoteState(note)}} >Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => { updateNote(noteState); document.getElementById(`${note._id}`).classList.remove('show')}}  >Save changes</button>
                                 {/* data-dismiss="modal" */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoteItem