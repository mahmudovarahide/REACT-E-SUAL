import React from 'react'
import '../../style/style.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <section className="footer mt-5">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <ul className="d-none-res">
                        <li><NavLink to="/">Ana səhifə</NavLink></li>
                        <li><NavLink to="/about">Haqqımızda</NavLink></li>
                        <li><a href="/">İstifadəçi şərtləri</a></li>
                        <li><a href="/">Haqqımızda</a></li>
                    </ul>
                    <a href="/">2022 © Bütün hüquqlar qorunur.</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Footer