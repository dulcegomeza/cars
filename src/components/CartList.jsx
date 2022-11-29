import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from '../context/ProductContext'

function Cartlist() {

    const {cart, deleteProductCart} = useContext(ProductContext);

  return (
    <div>
      
    </div>
  )
}

export default Cartlist
