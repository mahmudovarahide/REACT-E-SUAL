import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Discover from '../Pages/Discover/Discover'
import About from '../Pages/About/About'
import Login from '../Pages/Login/Login'

export const mainRouters = [
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
        path: '/login',
        element: <Login />,
      },
]