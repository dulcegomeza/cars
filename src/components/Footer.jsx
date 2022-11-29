import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/home" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item"><Link to="/cars" className="nav-link px-2 text-muted">Autos</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link px-2 text-muted">Inicio de sesión</Link></li>
          <li className="nav-item"><Link to="/signin" className="nav-link px-2 text-muted">Registro</Link></li>
        </ul>
        <div>

        </div>
        <p className="text-center text-muted">© 2022 Toño's cars</p>
      </footer>


    </>
  )
}

export default Footer
