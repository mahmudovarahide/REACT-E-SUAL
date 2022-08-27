import { useEffect } from 'react';
import { useDispatch} from 'react-redux'
import { authInit, LogIn} from '../store/slices/auth'
import axios from '../utilities/axios';


//istifade olub olmasini yoxlayir

export const Auth = ({ children }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const initialize = async () => {


            axios.get('profile/1').then(res => {
              
                if(res.data.message === "Unauthenticated"){
                    dispatch(
                        authInit(
                            {
                                isAuthenticated: true, //girişie cehd edilib
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