import { useState, useContext } from 'react';
import Swal from 'sweetalert2'
import { UserContext } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
import { loginService } from '../../services/authService';
import LoadingButton from '../../components/LoadingButton';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  async function loginForm(event) {
    setIsLoading(true);
    event.preventDefault();


    try {
      const user = await loginService(formulario);
      login(user);
      navigate("/cars");
    } catch (err) {
      Swal.fire(
        'Mensaje',
        err.response.data.msg,
        'error'
      )
      console.log(err);
      setIsLoading(false);
    }
  }


  return (
    <>
        <div class="container h-100 ">
          <div clas="row h-100 justify-content-center align-items-center">
            <form onSubmit={loginForm} className="p-3 animate__animated animate__fadeIn" >
              <h1>Inicio de sesión</h1>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder='Correo electriónico'
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp" value={formulario.email} onChange={handleInputChange}
                />
                <div id="emailHelp" className="form-text">
                  Nunca compartiremos su informacion con nadie.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  placeholder='Contraseña'
                  type="password"
                  className="form-control"
                  name="password"
                  id="exampleInputPassword1" value={formulario.password} onChange={handleInputChange}
                />
              </div>
              <LoadingButton isLoading={isLoading} text="Inicio"/>
            </form>
          </div>
        </div>
    </>
  );
}

export default Login
