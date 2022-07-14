import React from 'react'
import Layout from './Layout/Layout'
import {useRoutes} from 'react-router-dom'
import { mainRouters } from './Router/Router'


function App() {
    const routers = useRoutes(mainRouters);
  return (
    <Layout>
        {routers}
    </Layout>
  )
}
export default App;
