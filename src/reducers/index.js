import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers';

export default combineReducers({
    loginReducer: LoginReducer
});
