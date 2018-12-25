import types from '../types';

const fetchProducts = () => async dispatch => {
    const response = await JSON.parse(localStorage.getItem("products") || "[]");
    dispatch({ 
        type: types.FETCH_PRODUCTS,
        payload: response
    })
};

const selectedProduct = product => {
    return {
        type: types.SELECT_PRODUCT,
        payload: product
    }
}

const deleteProduct = id => async (dispatch) => {
    const products = await JSON.parse(localStorage.getItem("products") || "[]");
    const newProducts = products.filter(p => p.id !== id);
    await localStorage.setItem("products", JSON.stringify(newProducts));
    dispatch({
        type: types.DELETE_PRODUCT
    })

} 

const addProduct = item => async (dispatch) => {
    const products = await JSON.parse(localStorage.getItem("products") || "[]");
    const newProducts = [...products, item];
    await localStorage.setItem("products", JSON.stringify(newProducts));
    dispatch({
        type: types.ADD_PRODUCT
    })
}

const updateProducts = (values, id) => async (dispatch) => {
    const products = await JSON.parse(localStorage.getItem("products") || "[]");
    const product = products.find(p => p.id === id);
    product.Name = values.Name;
    product.Description = values.Description;
    await localStorage.setItem("products", JSON.stringify(products));
    dispatch({
        type: types.UPDATE_PRODUCT,
    })
}

export default {
    selectedProduct,
    fetchProducts,
    deleteProduct,
    addProduct,
    updateProducts


}
