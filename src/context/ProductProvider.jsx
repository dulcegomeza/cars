/* import { useReducer, useCallback } from 'react'
import {ProductContext } from './ProductContext'
import ProductReducer from './ProductReducer'
import { getProductsService, getProductService} from '../services/productService';
import { types } from '../types/types';


const initialState = {
    productos: [],
    total: 0,
    producto: {},
    car: []
}


function ProductProvider = ({ children }) => {
    const [productState, dispatch ] = useReducer(ProductReducer, initialState);

    const getProducts = useCallback(
        async() =>{
            try{
                const resp = await getProductService();
                const products = resp.products.map((obj)=>{
                    return{
                        uid:obj._id,
                        name: obj.name,
                        description: obj.description,
                        price: obj.price,
                        discount: obj.discount,
                        discount_percentage: obj.discount_percentage,
                        imgUrls: obj.imgUrls

                    }
                })

                dispatch({
                    type: types.GET_PRODUCTS,
                    payload:products,
                })
            }
        }
    )

  return (
    <div>
      
    </div>
  )
}

export default ProductProvider
 */