import React from 'react'
import './Components/scss/style.css'
import FacebookCircleImage from './Components/images/facebook-icon-circle-logo-09F32F61FF-seeklogo 1.png'
import LoginCircleGoogleImage from './Components/images/178-1783296_g-transparent-circle-google-logo 1.png'


function Login() {
    return (
        <section className="register">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 border-register d-flex flex-column justify-content-center align-items-center">
                        <form action="" className="d-flex flex-column">
                            <h3 className="text-center">Daxil ol</h3>
                            <input type="text" placeholder="Email / Username" />
                            <div className="show-hide-pass">
                                <input className="w-100" type="password" placeholder="şifrə" id="password" />
                                <i id="eye" className="fa-solid fa-eye-slash"></i>
                            </div>
                            <a href="/" className="login mt-4">Daxil ol</a>
                            <span className="loginwith">və ya</span>
                            <div className="d-flex justify-content-center mt-3">
                            <a href="/">
                                    <img className="w-75" src={LoginCircleGoogleImage} alt="" />
                                </a>
                                <a href="/">
                                    <img className="w-75" src={FacebookCircleImage} alt="" />
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-center">Qeydiyyat</h3>
                        <form action="" className="d-flex flex-column ">
                            <input type="text" placeholder="Username" required />
                            <input type="email" placeholder="Email" required />
                            <input type="datetime" placeholder="Doğum tarixi" required />
                            <select name="" id="">
                                <option value="">cinsiyyət</option>
                                <option value="">cinsiyyət</option>
                                <option value="">cinsiyyət</option>
                            </select>
                            <div className="show-hide-pass">
                                <input className="w-100" type="password" placeholder="şifrə" id="password2" />
                                <i id="eye2" className="fa-solid fa-eye-slash"></i>
                            </div>
                            <div className="show-hide-pass">
                                <input className="w-100" type="password" placeholder="şifrənin təkrarı" id="password3" />
                                <i id="eye3" className="fa-solid fa-eye-slash"></i>
                                <div className="pass-msg my-3"></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <input type="checkbox" name="checkbox" id="checkbox_id" value="value" />
                                <label><span>İstifadəçi şərtlərini </span> oxudum
                                    və qəbul edirəm</label>
                            </div>
                            <a href="/" type="submit" className="login mt-4">Qeydiyyatdan keç</a>
                            <span className="loginwith">və ya</span>
                            <div className="d-flex justify-content-center mt-3">
                                <a href="/">
                                    <img className="w-75" src={LoginCircleGoogleImage} alt="" />
                                </a>
                                <a href="/">
                                    <img className="w-75" src={FacebookCircleImage} alt="" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login
