import  {useContext} from "react";
import ModelContext from "../context/ModelContext";
import { NavLink } from "react-router-dom";

const CartList = () => {
    const { cart, deleteModelToCart } = useContext (ModelContext)

    return (
        <>
        {
               cart?.map( (model) =>(
                <div className="card rounded-3 mb-4" key={model.uid}>
        
                  <div id="div_cart" className="card-body">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div id="img_cart" className="col-md-3 col-lg-2 col-sm-8">
                        <img  src={model.imgs[0]} className="img-fluid" alt={model.model} />
                      </div>
        
                      <div id="div_productCartText" className="col-md-4 col-lg-4 col-sm-10">
                        <p>{model.model}</p>
                        <p><span className="text-muted">{model.description}</span></p>
                      </div>
                      <div id="div_productCartPrice" className="col-md-3 col-lg-3 col-sm-10">
                        <p>$ {model.price} mxn</p>
                      </div>
        
                      <div className="col-md-2 col-lg-3 col-sm-12">
                        <NavLink id="btn_seeProductCart" className="btn btn-blanck-form w-100 mb-2" to={`/cars/${model.uid}`}> 
                          Detalles
                        </NavLink>
                        <button id="btn_deleteProductCart" onClick={()=> deleteModelToCart(model.uid)} className="btn btn-danger w-100">
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        
                ))

        }
        </>
    )
}

export default CartList;