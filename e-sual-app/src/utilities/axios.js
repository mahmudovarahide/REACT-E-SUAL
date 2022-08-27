import axios from "axios";

const axiosInt = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInt.interceptors.request.use(function(config) {
    const token = localStorage.getItem('access_token')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosInt.interceptors.response.use(
    (response) => response,
    (error) =>
    Promise.reject(
        (error.response && error.response.data) || "There is an error!"
    )
);

export default axiosInt;