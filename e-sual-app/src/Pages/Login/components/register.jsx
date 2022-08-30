import React, { useState } from 'react'
import axios from '../../../utilities/axios'
import '../../../style/style.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterAuth } from '../../../store/slices/auth';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import FacebookCircleImage from '../image/facebook-icon-circle-logo-09F32F61FF-seeklogo 1.png'
import LoginCircleGoogleImage from '../image/178-1783296_g-transparent-circle-google-logo 1.png'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .max(255)
        .required("Email daxil olunmayıb"),
    password: Yup.string().min(8, "Şifrə minimum 8 simvoldan ibarət olmalıdır").max(255).required("Parol daxil olunmayıb"),
});

function Register() {
    const dispatch = useDispatch();
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formikRegister = useFormik({
        initialValues: {
            username: "",
            email: "",
            dob: "",
            gender: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post('register', { ...values, name: values.username })
                .then(({ data }) => {
                    dispatch(RegisterAuth(
                        {
                            isAuthenticated: true,
                            isInitialized: true,
                            user: data.data
                        }
                    ))
                    Swal.fire({
                        icon: "success",
                        title: 'Qeydiyyatdan uğurla keçdiniz!',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                })
                .catch(({ response }) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Uğursuz Qeydiyyat!',
                    })
                })
        },
    })
    //Show Hide Toggle
    const [changepassword, setChangePassword] = useState(false);
    const ShowHideToogle = () => {
        setChangePassword(prevState => !prevState)
    }

    const CheckValidation = (e) => {
        setConfirmPassword(e.target.value)
        if (password != confirmPassword) {
            setIsError("")
        } else {
            setIsError("Şıfrələr bir-birinə uyğun deyil")
        }

    }

    return (
        <>
            <form onSubmit={formikRegister.handleSubmit} className="d-flex flex-column">

                <input type="text"
                    name="username"
                    placeholder="Username"
                    required
                    {...formikRegister.getFieldProps("username")}
                />

                <input type="email"
                    placeholder="Email"
                    name="email"
                    required
                    {...formikRegister.getFieldProps("email")} className={`w-100 ${Boolean(formikRegister.errors.email) && formikRegister.touched.email ? "bg-light text-dark" : ""}`}
                />
                {
                    Boolean(formikRegister.errors.email) && formikRegister.touched.email &&
                    <span className="d-block text-danger" style={{ fontSize: 12, marginTop: 5 }}>{formikRegister.errors.email}</span>
                }

                <input type="datetime" placeholder="Doğum tarixi" required name="birthday" {...formikRegister.getFieldProps("dob")} />

                <select name="gender" id="" {...formikRegister.getFieldProps("gender")}>
                    <option value="man" >Kişi</option>
                    <option value="woman" >Qadın</option>
                </select>
                <div className="show-hide-pass">
                    <input
                        value={password}
                        type={changepassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="şifrə"
                        name="password"
                        {...formikRegister.getFieldProps("password")}
                        className={`w-100 ${Boolean(formikRegister.errors.password) && formikRegister.touched.password ? "bg-light text-dark" : ""}`}
                    />
                    {
                        Boolean(formikRegister.errors.password) && formikRegister.touched.password &&
                        <span className="d-block text-danger" style={{ fontSize: 12, marginTop: 5 }}>{formikRegister.errors.password}</span>
                    }
                    <button onClick={ShowHideToogle} className="show-hide-button">
                        {
                            changepassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>
                        }
                    </button>
                </div>
                <div className="show-hide-pass">
                    <input className="w-100"
                        value={confirmPassword}
                        type={changepassword ? "text" : "password"}
                        onChange={(e) => CheckValidation(e)}
                        placeholder="Şifrənin təkrarı"
                        name="confirmPassword"
                    // {...formikRegister.getFieldProps("confirmPassword")}
                    />
                    <button onClick={ShowHideToogle} className="show-hide-button">
                        {
                            changepassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>
                        }
                    </button>
                    <span className="mt-3 d-block text-danger" style={{ fontSize: 12, marginTop: 5 }}> {isError}</span>
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
        </>
    )
}

export default Register

