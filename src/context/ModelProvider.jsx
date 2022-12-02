
import { useReducer, useCallback } from 'react';
import ModelContext from './ModelContext';
import ModelReducer from './ModelReducer';
import { getModelsPaginateService, getModelByIdService } from '../services/modelService';
import { types } from '../types/types';


const initialState = {
  models: [],
  total:0,
  total_pages:0,
  model: {
  },
  cart: [],
};

function ModelProvider({ children }) {
  const [modelState, dispatch] = useReducer(ModelReducer, initialState);

  const getModels = useCallback(
    async (page=1, limit=9 ) => {
      const data = {
        limit:limit, 
        page: page
      }
      
      try {
      
        const resp = await getModelsPaginateService(data);

        const models = resp.models.map((obj) => {
        
          return {
            uid: obj._id,
            name: obj.name,
            description: obj.description,
            imgsUrl: obj.imgsUrl,
            price: obj.price,
            discount: obj.discount,
            discount_percentaje: obj.discount_percentaje,
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
      name: res.name,
      category: res.category.name,
      description: res.description,
      imgsUrl: res.imgsUrl,
      price: res.price,
      discount: res.discount,
      discount_percentaje: res.discount_percentaje,
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
      name: res.name,
      description: res.description,
      imgsUrl: res.imgsUrl,
      price: res.price,
      discount: res.discount,
      discount_percentage: res.discount_percentage
    };

    const findModel = modelState.cart.find((model) => {
      return model.uid === uid
    })

    if (!findModel) {
      dispatch({
        type: types.ADD_MODEL_CART,
        payload: model,
      });
      console.log('model añadido');
    }else{
      console.log('model ya se encuentra añadido en el carrito');
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