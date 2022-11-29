import { Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Cars from '../pages/Cars'
import NavbarPrivate from '../components/NavbarPrivate'
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile'
import Cart from '../components/Cart'


export const PrivateRoutes = () => {
  return (
    <>
      <NavbarPrivate/><Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Navigate to ="/home"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}



