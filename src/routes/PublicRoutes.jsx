import { Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Cars from '../pages/Cars'
import Login from '../pages/auth/Login'
import SignInForm from '../pages/SignInForm'
import Navbar from '../components/Navbar'
import NotFound from '../pages/NotFound'


export const PublicRoutes = () => {
  return (
    <>
      <Navbar/><Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
        <Route path="/" element={<Navigate to ="/home"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}



