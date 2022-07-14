import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <section class="footer mt-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <ul>
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