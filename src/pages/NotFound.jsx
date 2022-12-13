import { Link } from 'react-router-dom'
import './styles-notFound.css';

function NotFound() {
  return (
    <>
      <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block titulo">404</span>
              <div className="mb-4 lead">La página que buscas no se encuentra.</div>
              <Link to="/home" className="btn btn-link text-muted no-subrayado">Regresar a Inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
