import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const updateCredentials = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const navigate = useNavigate()

    const loginMethod = async (event) => {
        event.preventDefault()

        const host = "http://localhost:5000"
        const url = `${host}/api/auth/login`


        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if(data.success && data.payload){             // logged in successfully
            localStorage.setItem('token', data.payload) // Saving the JWT
            navigate("/")
        }
        else{
            // not logged in
        }
        
    }

    return (
        <div className='card col-md-6 offset-md-3 p-5'>
            <h2 className='mb-4 text-center'> Log in Now</h2>
            <form onSubmit={loginMethod}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" onInput={updateCredentials} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" minLength={5} onInput={updateCredentials} required />
                </div>
                <button type="submit" className="btn btn-dark mt-3 px-4 float-right">Login</button>
            </form>
        </div>
    )
}


export default Login
