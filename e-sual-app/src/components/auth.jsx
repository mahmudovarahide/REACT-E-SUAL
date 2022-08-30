import { useEffect } from 'react';
import { useDispatch} from 'react-redux'
import { authInit, LogIn,RegisterAuth} from '../store/slices/auth'
import axios from '../utilities/axios';


export const Auth = ({ children }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const initialize = async () => {


            axios.get('profile/1').then(res => {
              
                if(res.data.message === "Unauthenticated"){
                    dispatch(
                        authInit(
                            {
                                isAuthenticated: true, 
                            }
                        )
                    );
                }

                if(res.data.message === "Data has been fetched"){ 
                    dispatch( LogIn(
                        {
                            isAuthenticated: true,
                            isInitialized: true,
                            user: res.data.data,
                        }
                    ))
                    dispatch( RegisterAuth(
                        {
                            isAuthenticated: true,
                            isInitialized: true,
                            user: res.data.data,
                        }
                    ))
                } 
            })  
        }

        initialize();
    }, []);

    return (
        <> {children} </>
    )


};

export default Auth;