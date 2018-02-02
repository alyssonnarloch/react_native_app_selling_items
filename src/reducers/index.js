import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers';
import ProductReducer from './ProductReducers';

export default combineReducers({
    loginReducer: LoginReducer,
    productReducer: ProductReducer
});
