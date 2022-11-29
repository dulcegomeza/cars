import {useEffect, useContext} from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Footer from '../components/Footer'
import { UserContext } from '../context/UserContext'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'


const AppRouter = () => {
  const {user, verifyingToken} = useContext(UserContext);

  useEffect(()=>{verifyingToken()},[verifyingToken])


  return (
    
    <Router>
        {user.uid?(<PrivateRoutes/>):(<PublicRoutes/>)}
        <Footer/>


    </Router>
  )
}

export default AppRouter
