import React, { useState } from 'react'
import '../../style/style.css'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../store/slices/auth'
import Logo from '../image/logo.png'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  let menu
  if (toggle) {
    menu =
      <div className="open-info-menu absolute-info-user-open-menu display-none">
        <NavLink to="/" className="mt-1"><i className="fa-solid fa-square-check"></i><span className="ms-2">Entry`lər</span></NavLink>
        <NavLink to="/" className="mt-1"><i className="fa-solid fa-heart"></i><span className="ms-2">Favorilər</span></NavLink>
        <NavLink to="/" className="mt-1"><i className="fa-solid fa-chart-line"></i><span className="ms-2">Statistika</span></NavLink>
        <button className="user-box cursor-pointer" onClick={() => LogOut()}>
          <span className="me-2"><i className="fa-solid fa-right-from-bracket"></i></span> Çıxış</button>
      </div>
  }

  const auth = useSelector(store => store.auth)
  const dispatch = useDispatch()

  const LogOut = () => {
    localStorage.removeItem('access_token')
    dispatch(logOut())
  }

  return (
    <header className='header'>
      <div className="container-fluid">
        <div className="nav justify-content-between align-items-center mt-1">
          <div className="brand">
            <NavLink to="/"><img src={Logo} alt="" /></NavLink>
          </div>
          <form action="" className="serach-box pt-1">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Axtar..." />
          </form>
          <div className="d-flex justify-content-between d-none-res align-items-center mt-3">
            <ul className="d-flex align-items-center">
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
          <div className="register mt-1 me-5">
            {
              auth.isInitialized &&

              <>
                <div className="info-user-box d-flex align-items-center">
                  <div className="image-box--info-user">
                    <img src={auth.user.image} alt="" />
                  </div>
                  <div className="text-box">
                    <h4>{auth.user.name}</h4>
                  </div>
                  <div class="info-user-button-box d-flex align-items-center">
                    <NavLink to="/profile" className="user-box">Profil</NavLink>
                    <button className="arrow-down-user-button" onClick={() => setToggle(!toggle)}><i className="fa-solid fa-arrow-down"></i></button>
                  </div>
                </div>
                {menu}
              </>
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
