import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Discover from '../Pages/Discover/Discover'

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
        path: '/contact',
        element: <Contact />,
      },
]