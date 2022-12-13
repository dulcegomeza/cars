
import { useReducer, useCallback } from 'react';
import ModelContext from './ModelContext';
import ModelReducer from './ModelReducer';
import { getModelsPaginateService, getModelByIdService } from '../services/modelService';
import { types } from '../types/types';
import Swal from 'sweetalert2';


const initialState = {
  models: [],
  total:0,
  total_pages:0,
  model: {
  },
  cart: [],
};

const alert = async ( icon, message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 2500
  })

  await Toast.fire({
    icon: icon,
    title: message
  })
}

function ModelProvider({ children }) {
  const [modelState, dispatch] = useReducer(ModelReducer, initialState);


  const getModels = useCallback(
    async (page=1, limit=9 ) => {
      const data = {
        limit:limit, 
        pag: page
      }
      
      try {
      
        const resp = await getModelsPaginateService(data);

        const models = resp.models.map((obj) => {
        
          return {
            uid: obj._id,
            model: obj.model,
            description: obj.description,
            imgs: obj.imgs,
            price: obj.price,
            year: obj.year,
            brand: obj.brand
          };
        });

        dispatch({
          type: types.GET_MODELS,
          payload: models,
        });

        dispatch({
          type: types.GET_MODELS_TOTAL,
          payload: resp.total,
        });
        
        dispatch({
          type: types.GET_MODELS_TOTAL_PAGES,
          payload: resp.total_pages,
        });
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );


  const getModel = useCallback(async (uid) => {
    const res = await getModelByIdService(uid);

    const model = {
      uid: res._id,
      model: res.model,
      description: res.description,
      imgs: res.imgs,
      price: res.price,
      year: res.year,
      brand: res.brand,
      stock: res.stock
    };

    dispatch(
      {
        type: types.GET_MODEL,
        payload: model
      }
    );
  }, []);


  const addModelToCart = async (uid) => {

    const res = await getModelByIdService(uid);
    
    const model = {
      uid: res._id,
      model: res.model,
      description: res.description,
      imgs: res.imgs,
      price: res.price,
      year: res.year,
      brand: res.brand,
      stock: res.stock
    };

    const findModel = modelState.cart.find((model) => {
      return model.uid === uid
    })

    if (!findModel) {
      dispatch({
        type: types.ADD_MODEL_CART,
        payload: model,
      });

      alert('success',`Carro ${res.model} añadido!`);

    }else{
      alert('info',`Carro ${res.model} ya se encuentra añadido en el carrito de compras`);
    }
  };

  const deleteModelToCart = (uid) => {
    dispatch({
      type: types.DELETE_MODEL_CART,
      payload: uid,
    })
  }

  const emptyCart = (cart) =>{
    dispatch({
      type: types.EMPTY_CAR,
      payload: cart,
    });
    
  }

  return (
    <ModelContext.Provider
      value={{
        models: modelState.models,
        total: modelState.total,
        total_pages: modelState.total_pages,
        getModels,
        getModel,
        model: modelState.model,
        addModelToCart,
        cart: modelState.cart,
        deleteModelToCart,
        emptyCart
      }}
    >
      {children}
    </ModelContext.Provider>
  )
}

export default ModelProvider