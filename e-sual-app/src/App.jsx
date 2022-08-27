import React from 'react'
import Layout from './layout/layout'
import Loader from "././pages/loader/loader"
import Routers  from './router/router'
import Auth from './components/auth'
import { useSelector } from 'react-redux'


function App() {
    const {isAuthenticated} = useSelector(store => store.auth)
    
  return (
    <Auth>
      {
        !isAuthenticated && <Loader/>
      }
     {
      isAuthenticated &&  <Layout>
        <Routers/>
      </Layout>
     }
    </Auth>
  )
}
export default App;
