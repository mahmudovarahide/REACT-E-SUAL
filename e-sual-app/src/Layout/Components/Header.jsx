import React, { Component } from 'react'
import '../Components/scss/style.css' 
import {NavLink} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className="container-fluid">
          <div className="nav justify-content-between mt-2">
            <div className="brand">
              <NavLink to="/"><img src="asessts/images/logo.png" alt="" /></NavLink>
            </div>
            <form action="" className="serach-box pt-3">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Axtar..." />
            </form>
            <div className="d-flex justify-content-between mt-2">
              <ul className="d-flex">
                <li className="nav-item">
                  <NavLink to='/' className="nav-link">Ana səhifə</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/discover" className="nav-link">Kəşfet</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">Haqqımızda</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/contact' className="nav-link">Əlaqə</NavLink>
                </li>
              </ul>
            </div>
            <div className="register mt-3 me-5">
              <NavLink to="/login">Daxil ol</NavLink>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Header
