import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './styles-footer.css';
import { UserContext } from '../context/UserContext'


const Footer = () => {
  const { user, verifyingToken } = useContext(UserContext);

  useEffect(() => { verifyingToken() }, [verifyingToken])

  return (
    <>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/home" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item"><Link to="/cars" className="nav-link px-2 text-muted">Autos</Link></li>
          {user.uid ?
            (<li className="nav-item"><Link to="/profile" className="nav-link px-2 text-muted">Perfil</Link></li>) :
            (<>
              <li className="nav-item"><Link to="/login" className="nav-link px-2 text-muted">Inicio de sesión</Link></li>
              <li className="nav-item"><Link to="/signin" className="nav-link px-2 text-muted">Registro</Link></li></>)
          }
        </ul>
        <div className='text-center'>
          <a href="https://herewecode.io/" target="_blank" rel="noreferrer"><FaFacebookSquare className='icon-footer' /></a>
          <a target="_blank" href="https://herewecode.io/" rel="noreferrer"><FaLinkedinIn className='icon-footer' /></a>
          <a target="_blank" href="https://herewecode.io/" rel="noreferrer"><FaTwitter className='icon-footer' /></a>
        </div>
        <p className="text-center text-muted">Copyright © 2022 Toño's cars</p>
      </footer>


    </>
  )
}

export default Footer
