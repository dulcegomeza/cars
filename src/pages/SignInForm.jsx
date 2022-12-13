import { useState } from 'react';
import Swal from 'sweetalert2';
import { signupService } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '../components/LoadingButton';

const SignInForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formulario, setFormulario] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  async function createUser(event) {
    setIsLoading(true);
    event.preventDefault();

    try {
      await signupService(formulario);
      navigate("/login");
    } catch (err) {
      Swal.fire(
        'Mensaje',
        err.response.data.errors[0].msg,
        'error'
      )
      setIsLoading(false);
    }

  }

  return (
    <>
      <div className="row align-items-center g-lg-5 py-5">
        
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3 animate__animated animate__fadeIn">
            Listo para comenzar el viaje?
          </h1>
          <p className="col-lg-10 fs-4 animate__animated animate__fadeIn">
            Estas a un paso de manejar el auto de tus sueños
          </p>
        </div>

        <div className="col-md-10 mx-auto col-lg-5 animate__animated animate__fadeIn">
          <form onSubmit={createUser} className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                name="name"
                placeholder="Nombre"
                value={formulario.name} onChange={handleInputChange}
              />
              <label htmlFor="floatingName">Nombre</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingLastName"
                name="lastName"
                placeholder="Apellido"
                value={formulario.lastName} onChange={handleInputChange} 
              />
              <label htmlFor="floatingLastName">Apellido</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                name="email"
                placeholder="nombre@example.com"
                
                value={formulario.email} onChange={handleInputChange}
              />
              <label htmlFor="floatingEmail">Correo electrónico</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                name="password"
                placeholder="Contraseña"
                value={formulario.password} onChange={handleInputChange}
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingInputPhone"
                name="phone"
                placeholder="555-555-1245"
                value={formulario.phone} onChange={handleInputChange}
              />
              <label htmlFor="floatingInputPhone">Teléfono</label>
            </div>
            <LoadingButton isLoading={isLoading} text="Registro" />
            <hr className="my-4" />
            <small className="text-muted">
              Al hacer clic en Registro, aceptas los terminos y condiciones de uso.
            </small>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInForm
