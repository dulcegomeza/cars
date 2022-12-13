import { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";


const Navbar = () => {

  const { logout } = useContext(UserContext);

  const navigate = useNavigate();

  const onLogout = () => {
      logout();
      navigate('/login', {
          replace: true
      });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">Toño's Cars</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cars">Autos</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mi cuenta
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/profile">Actualizar Datos</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/cart">Carrito</NavLink></li>

                </ul>
              </li>
              <button
                    className="nav-item  btn btn-blanck-form"
                    onClick={onLogout}
                >
                    Salir
                </button>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
