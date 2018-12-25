import types from '../types';
import { combineReducers } from 'redux';
const productsReducer = (state = [], action) => {
    switch(types.FETCH_PRODUCTS) {
        case action.type: 
            return action.payload      
        default: return state
    }
}

const selectedProductReducer = (state = {}, action) => {
    switch(types.SELECT_PRODUCT) {
        case action.type: 
            return action.payload      
        default: return state
    }
}  

const deleteProductReducer = (state = null, action) => {
    switch(types.DELETE_PRODUCT) {
        case action.type: 
            return state;
        default: return state
    }
}

const addProductReducer = (state = null, action) => {
    switch(types.ADD_PRODUCT) {
        case action.type: 
            return state; 
        default: return state;
    }
}

const updateProductReducer = (state = null, action) => {
    switch(types.UPDATE_PRODUCT) {
        case action.type:
            return state;
        default: return state;    
    }
}

const reducers = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    deleteProduct: deleteProductReducer,
    addProduct: addProductReducer,
    updateProduct:updateProductReducer
})

export default reducers