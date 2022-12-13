import { useState, useContext, useEffect } from "react";
import ModelContext from "../context/ModelContext";
import CartList from "../components/CartList";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";



function Cart() {
  const { cart } = useContext(ModelContext)

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acumulador, model) =>
      acumulador + model.price, 0
    ))
  }, [cart])


  return (
    <>
      <section className="h-100  animate__animated animate__fadeIn" >
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">

              <div className="row">

                {cart.length > 0 ? (
                  <>
                    <div className="col-lg-7">
                      <div className="card mb-2">
                        <div className="card-body">
                          <CartList />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 mx-auto mt-auto mb-auto">
                      <section className="row mb-5">
                        <article className="col-md-12 text-center">
                          <h2>Total a pagar: ${total} mxn </h2>
                        </article>
                      </section>
                      <section className="row">
                        <article className="col">
                          <PaypalCheckoutButton currency={"MXN"}
                            amount={total}
                            showSpinner={false} />
                        </article>
                      </section>
                    </div>
                  </>
                ) : (
                  <div className="text-center mt-5">
                    <h3>¡No tienes productos aun en tu carrito!</h3>
                  </div>
                )}




              </div>


            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Cart
