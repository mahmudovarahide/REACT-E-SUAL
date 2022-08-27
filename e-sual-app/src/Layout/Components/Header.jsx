import React, { Component } from 'react'
import '../../style/style.css'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { logOut } from '../../store/slices/auth'
import userEvent from '@testing-library/user-event'

const Header = () => {
  const auth = useSelector(store => store.auth) 
  const dispatch = useDispatch()



  const LogOut = () => { 
    localStorage.removeItem('access_token')
    dispatch(logOut())
  }
 
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
            <div className="d-flex justify-content-between d-none-res mt-2">
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
              { 
                  auth.isInitialized && 
                             <div className="info-user-box d-flex">
                             <div className="image-box--info-user">
                                 <img src="assets/image/Ellipse 1.png" alt=""/>
                             </div>
                             <div className="text-box">
                                 <h4>{auth.user.name}</h4>
                             </div>
                             <div className="info-user-button-box d-flex">
                                 <button className="user-box cursor-pointer" onClick={() => LogOut()}>Çıxış</button> 
                             </div>
                         </div>
              }
              {
                !auth.isInitialized && <NavLink to="/login">Daxil ol</NavLink>
              }
            </div>
          </div>
        </div>
      </header>
    ) 
}
export default Header
