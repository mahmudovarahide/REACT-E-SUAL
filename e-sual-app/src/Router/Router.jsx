import Home from '../pages/home/home'
import Contact from '../pages/contact/contact'
import Discover from '../pages/discover/discover'
import About from '../pages/about/about'
import Login from '../pages/login/login'


import {useRoutes} from 'react-router-dom'
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux'


const Router = () => {

  const auth = useSelector(store => store.auth)

  const mainRouters = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/discover',
      element: <Discover />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    }
  ]

  const authRouter = [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    }
  ] 
  

 const route = useRoutes( auth.isInitialized ? mainRouters : authRouter);

 return (
  <>{route}</>
 )
}


export default Router