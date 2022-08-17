import React from 'react'
import axios from 'axios'
import '../../style/style.css'
import FacebookCircleImage from './image/facebook-icon-circle-logo-09F32F61FF-seeklogo 1.png'
import LoginCircleGoogleImage from './image/178-1783296_g-transparent-circle-google-logo 1.png'


function Login() {

    const [registerData, setRegisterData] = React.useState({})
    const [loginData,setLoginData]=React.useState({})

    const handleRegister = (e)=>{
        setRegisterData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }  
    const registerUser = (e)=>{
       
        const user = {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password
        }
        axios.post('http://localhost:5000/auth/register', user)
        .then(res => {
            localStorage.setItem('accessToken', res.data.token)
        })
        .catch((err)=>console.log(err))
    }

    const handleLogin = (e)=>{
        setLoginData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    console.log(loginData)

    const loginUser = (e) =>{
        axios.post('http://localhost:5000/auth/login',loginData)
        .then(res => {
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }


    return (
        <section className="register">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 border-register d-flex flex-column justify-content-center align-items-center">
                        <form action="" className="d-flex flex-column">
                            <h3 className="text-center">Daxil ol</h3>
                            <input type="email" name="email" placeholder="Email / Username" onChange={handleLogin}/>
                            <div className="show-hide-pass">
                                <input className="w-100" name="password" type="text" placeholder="şifrə" id="password" onChange={handleLogin}/>
                                <i id="eye" className="fa-solid fa-eye-slash"></i>
                            </div>
                            <button type="button" className="login mt-4" onClick={loginUser}>Daxil ol</button>
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
                            <input type="text" name="name" placeholder="Username" required onChange={handleRegister}/>
                            <input type="email" placeholder="Email" name="email" required onChange={handleRegister} />
                            <input type="datetime" placeholder="Doğum tarixi" required name="birthday" onChange={handleRegister}/>
                            <select name="gender" id="" onChange={handleRegister}>
                                <option value="man">Kişi</option>
                                <option value="woman">Qadıns</option> 
                            </select>
                            <div className="show-hide-pass">
                                <input className="w-100" type="password" placeholder="şifrə" id="password2" name="password" onChange={handleRegister}/>
                                <i id="eye2" className="fa-solid fa-eye-slash"></i>
                            </div>
                            <div className="show-hide-pass">
                                <input className="w-100" type="password" placeholder="şifrənin təkrarı" id="password3" name="confirmPassword" onChange={handleRegister}/>
                                <i id="eye3" className="fa-solid fa-eye-slash"></i>
                                <div className="pass-msg my-3"></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <input type="checkbox" name="checkbox" id="checkbox_id" value="value" />
                                <label><span>İstifadəçi şərtlərini </span> oxudum
                                    və qəbul edirəm</label>
                            </div>
                            <button type="button" className="login mt-4"  onClick={registerUser}>Qeydiyyatdan keç</button>
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
