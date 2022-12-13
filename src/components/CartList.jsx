import { useContext } from "react";
import ModelContext from "../context/ModelContext";
import { FaTrashAlt } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const CartList = () => {
  const { cart, deleteModelToCart } = useContext(ModelContext)

  return (
    <>
      {
        cart?.map((model) => (
          <div className="mb-4" key={model.uid}>

            <div >
              <div className="row d-flex justify-content-between align-items-center">
                <div id="img_cart" className="col-md-3 col-lg-2 col-sm-8">
                  <img src={model.imgs[0]} className="img-fluid" alt={model.model} />
                </div>

                <div className="col-md-4 col-lg-4 col-sm-10">
                  <p>{model.model}</p>
                  <p><span className="text-muted">{model.description}</span></p>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-10">
                  <p>$ {model.price} mxn</p>
                </div>
                <div className="col-md-2  col-sm-12">
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Quitar</Tooltip>}>
                    <span className="d-inline-block">
                      <button onClick={() => deleteModelToCart(model.uid)} className="btn btn-danger w-100">
                        <FaTrashAlt size={20}></FaTrashAlt>
                      </button>
                    </span>
                  </OverlayTrigger>
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