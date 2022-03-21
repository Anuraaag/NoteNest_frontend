import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [fields, setFields] = useState({ name: "", email: "", password: "", confirm_password: "" })

    const updateFields = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value })
    }

    const navigate = useNavigate()


    const signupMethod = async (event) => {
        event.preventDefault()

        if (event.password === event.confirm_password) {

            const host = "http://localhost:5000"
            const url = `${host}/api/auth/createUser`

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": fields.name,
                    "email": fields.email,
                    "password": fields.password
                })
            })

            const data = await response.json()

            if (data.success && data.payload) {  // logged in successfully
                localStorage.setItem('token', data.payload)  // Saving the JWT
                navigate("/")  // redirecting to home
            }
            else {
                // not logged in
            }
        } else {
            //alert saying password do not match
        }


    }

    return (
        <div className='card col-md-6 offset-md-3 p-5'>
            <h2 className='mb-4 text-center'> Signup to NoteNest</h2>
            <form onSubmit={signupMethod}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" onInput={updateFields} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" onInput={updateFields} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" minLength={5} onInput={updateFields} required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" className="form-control" name="confirm_password" id="confirm_password" placeholder="Re-enter password" minLength={5} onInput={updateFields} required />
                </div>
                <button type="submit" className="btn btn-dark mt-3 px-4 float-right">Register</button>
            </form>
        </div>

    )
}

export default Signup