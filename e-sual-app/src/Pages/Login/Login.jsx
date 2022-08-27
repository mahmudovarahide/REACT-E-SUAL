import React from 'react'
import axios from '../../utilities/axios'
import '../../style/style.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '../../store/slices/auth';
import { useDispatch } from 'react-redux';
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
                    dispatch( LogIn(
                        {
                            isAuthenticated: true,
                            isInitialized: true,
                            user: {
                                name: data.name
                            }
                        }
                    ))
                    swal("Hesabınıza daxil oldunuz!", "Düyməyə klikləyin", "success") 

                })
                .catch(({ response }) => {
                    formik.setErrors({
                        email: response.data.message,
                        password: response.data.message
                    })
                })
        },
    });

    const formikRegister=useFormik({
        initialValues: {
            username:"",
            email: "",
            dob:"",
            gender:"",
            password: "",
        },
        onSubmit: (values) => {
            axios.post('register', {...values, name: values.username})
            .then(({ data }) => {
                dispatch( LogIn(
                    {
                        isAuthenticated: true,
                        isInitialized: true,
                        user: data.data
                    }
                ))
            })
            .catch(({ response }) => {
                 //errr
            })
        },
    })


    


    return (
        <section className="register">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 border-register d-flex flex-column justify-content-center align-items-center">
                        <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
                            <h3 className="text-center">Daxil ol</h3>
                            <div>
                                <input type="text" name="email" placeholder="Email / Username"   {...formik.getFieldProps("email")} className={`w-100 ${Boolean(formik.errors.email) && formik.touched.email ? "bg-light text-dark" : ""}`} />
                                {
                                    Boolean(formik.errors.email) && formik.touched.email &&
                                    <span className="d-block text-danger" style={{ fontSize: 12, marginTop: 5 }}>{formik.errors.email}</span>
                                }
                            </div>
                            <div className="show-hide-pass">
                                <input name="password" type="password" placeholder="şifrə" id="password" {...formik.getFieldProps("password")} className={`w-100 ${Boolean(formik.errors.password) && formik.touched.password ? "bg-light text-dark" : ""}`} />
                                <i id="eye" className="fa-solid fa-eye-slash"></i>
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
                        <form onSubmit={formikRegister.handleSubmit} className="d-flex flex-column ">
                            <input type="text" name="name" placeholder="Username" required {...formikRegister.getFieldProps("username")}/>
                            <input type="email" placeholder="Email" name="email" required {...formikRegister.getFieldProps("email")}/>
                            <input type="datetime" placeholder="Doğum tarixi" required name="birthday" {...formikRegister.getFieldProps("dob")}/>
                            <select name="gender" id="" {...formikRegister.getFieldProps("gender")}>
                                <option value="man" >Kişi</option>
                                <option value="woman" >Qadın</option>
                            </select>
                            <div className="show-hide-pass">
                                <input className="w-100" type="password" placeholder="şifrə" id="password2" name="password" {...formikRegister.getFieldProps("password")}/>
                                <i id="eye2" className="fa-solid fa-eye-slash"></i>
                            </div>
                            <div className="show-hide-pass">
                                <input className="w-100" type="password" placeholder="şifrənin təkrarı" id="password3" name="confirmPassword" />
                                <i id="eye3" className="fa-solid fa-eye-slash"></i>
                                <div className="pass-msg my-3"></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <input type="checkbox" name="checkbox" id="checkbox_id" value="value" />
                                <label><span>İstifadəçi şərtlərini </span> oxudum
                                    və qəbul edirəm</label>
                            </div>
                            <button type="submit" className="login mt-4"  >Qeydiyyatdan keç</button>
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
