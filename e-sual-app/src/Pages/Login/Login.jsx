import React, { useState } from 'react'
import axios from '../../utilities/axios'
import '../../style/style.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '../../store/slices/auth';
import { useDispatch } from 'react-redux';
import Register from './components/register'
import FacebookCircleImage from './image/facebook-icon-circle-logo-09F32F61FF-seeklogo 1.png'
import LoginCircleGoogleImage from './image/178-1783296_g-transparent-circle-google-logo 1.png'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .max(255)
        .required("Email daxil olunmayıb"),
    password: Yup.string().min(8, "Şifrə minimum 8 simvoldan ibarət olmalıdır").max(255).required("Parol daxil olunmayıb"),
});

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post('login', { email: values.email, password: values.password })
                .then(({ data }) => {
                    localStorage.setItem(
                        'access_token',
                        data.access_token,
                    );
                    dispatch(LogIn(
                        {
                            isAuthenticated: true,
                            isInitialized: true,
                            user: {
                                name: data.name
                            }
                        }
                    ))
                    Swal.fire({
                        icon: "success",
                        title: 'Hesabınıza daxil oldunuz',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                })
                .catch(({ response }) => {
                    // formik.setErrors({
                    //     email: response.data.message,
                    //     password: response.data.message
                    // })
                    Swal.fire({
                        icon: 'error',
                        title: 'Uğursuz Giriş!',
                        text: 'Email və parolu düzgün daxil edin',
                    })
                })
        },
    });

    //Show Hide Toggle
    const [changepassword, setChangePassword] = useState(false);
    const ShowHideToogle = () => {
        setChangePassword(prevState => !prevState)
    }


    return (
        <section className="register">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 border-register d-flex flex-column justify-content-center align-items-center">
                        <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
                            <h3 className="text-center">Daxil ol</h3>
                            <div>
                                <input
                                    type="text"
                                    name="email" placeholder="Email / Username"
                                    {...formik.getFieldProps("email")} className={`w-100 ${Boolean(formik.errors.email) && formik.touched.email ? "bg-light text-dark" : ""}`} />
                                {
                                    Boolean(formik.errors.email) && formik.touched.email &&
                                    <span className="d-block text-danger" style={{ fontSize: 12, marginTop: 5 }}>{formik.errors.email}</span>
                                }
                            </div>
                            <div className="show-hide-pass">
                                <input
                                    name="password"
                                    type={changepassword ? "text" : "password"}
                                    placeholder="şifrə"
                                    id="password"
                                    {...formik.getFieldProps("password")}
                                    className={`w-100 ${Boolean(formik.errors.password) && formik.touched.password ? "bg-light text-dark" : ""}`}
                                />
                                <button onClick={ShowHideToogle} className="show-hide-button">
                                    {
                                        changepassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>
                                    }
                                </button>
                            </div>
                            {
                                Boolean(formik.errors.password) && formik.touched.password &&
                                <span className="d-block text-danger" style={{ fontSize: 12, marginTop: 5 }}>{formik.errors.password}</span>
                            }

                            <button type="submit" className="login mt-4"  >Daxil ol</button>
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
                        <Register />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login
