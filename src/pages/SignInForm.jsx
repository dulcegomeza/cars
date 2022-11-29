import React from 'react'

const SignInForm = () => {
  return (
    <>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            Listo para comenzar el viaje?
          </h1>
          <p className="col-lg-10 fs-4">
            Estas a un paso de manejar el auto de tus sueños
          </p>
        </div>

        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="FirstName"
              />
              <label htmlFor="floatingPassword">First Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="LastName"
              />
              <label htmlFor="floatingPassword">Last Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingInput"
                placeholder="555-555-1245"
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            
            
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInForm
