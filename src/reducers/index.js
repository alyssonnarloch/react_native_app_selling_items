import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers';

export default combineReducers({
    login: LoginReducer
});
