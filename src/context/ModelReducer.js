import { types } from '../types/types';

const ModelReducer = (state, action) => {
    switch (action.type) {
        case types.GET_MODELS:
            return {
                ...state,
                models: action.payload,
            }

        case types.GET_MODELS_TOTAL:
            return {
                ...state,
                total: action.payload
            }
        case types.GET_MODELS_TOTAL_PAGES:
            return {
                ...state,
                total_pages: action.payload
            }

        case types.GET_MODEL:
            return {
                ...state,
                model: action.payload
            }

        case types.ADD_MODEL_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case types.DELETE_MODEL_CART:
            return {
                ...state,
                cart: state.cart.filter((model) => model.uid !== action.payload)
            }
        case types.EMPTY_CAR:
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }

}

export default ModelReducer;