import React from 'react'
import { Link, useLocation } from "react-router-dom"

export const Navbar = props => {

  let location = useLocation()

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link to="/login" className="btn btn-outline-info mx-2" role="button">Login</Link>
            <Link to="/signup" className="btn btn-outline-info mx-2" role="button">Signup</Link>
          </form>
        </div>
      </nav>


    </div>


  )
}

export default Navbar