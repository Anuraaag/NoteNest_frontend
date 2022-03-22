import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"

export const Navbar = props => {

  let location = useLocation()
  let navigate = useNavigate()

  let handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to={`${localStorage.getItem('token') ? '/' : '/login'}`} >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">

              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to={`${localStorage.getItem('token') ? '/' : '/login'}`}>Home </Link>

            </li>
          </ul> 
         
          {!localStorage.getItem('token') ?
            <form className="form-inline my-2 my-lg-0">
              <Link to="/login" className="btn btn-outline-info mr-2" role="button">Login</Link>
              <Link to="/signup" className="btn btn-outline-info" role="button">Signup</Link>
            </form>
            : <button onClick={handleLogout} className="btn btn-outline-info" >Logout</button>
          }
        </div>
      </nav>


    </div>


  )
}

export default Navbar