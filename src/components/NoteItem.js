import React from 'react'
// import AlertContext from '../context/alert/AlertContext'
import { useContext } from 'react'


const NoteItem = (props) => {
    const { note } = props
    // const showAlert = useContext(AlertContext).showAlert
    return (
        <div className='col-md-4 my-3'>
            <div className="card" >
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">{note.title}</h5>
                        <div>
                            <i className="fa-solid fa-pen-to-square m-1 mx-2 text-warning" ></i>
                            {/*onClick={showAlert("hello", "success")}*/}
                            <i className="fa-solid fa-trash-can m-1 mx-2 text-danger"></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem