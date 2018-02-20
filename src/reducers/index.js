import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers';
import ProductFormReducer from './ProductFormReducers';
import ProductReducer from './ProductReducers';

export default combineReducers({
    loginReducer: LoginReducer,
    productFormReducer: ProductFormReducer,
    products: ProductReducer
});
