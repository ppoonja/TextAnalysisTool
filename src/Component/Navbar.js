import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg`}  style={{backgroundColor:props.mode.mode==='light'?'#FFF':'#2e010e'}}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode.mode==='light'?'dark':'light'}`} to="/">Text Analysis Tool</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className={`nav-link text-${props.mode.mode==='light'?'dark':'light'}`} aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode.mode==='light'?'dark':'light'}`} aria-current="page" to="/AboutUs">About Us</Link>
                        </li>
                    </ul>
                                                
                    <div className="form-check form-switch" style={{accentColor:props.mode.mode==='light'?'#2e010e':'#cfc4c7'}}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.mode.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode.title}</label>
                    </div>
                    
                </div>
            </div>
        </nav>
    </div>
  )
}
