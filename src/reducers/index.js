import { combineReducers } from 'redux';
import InputReducer from './InputReducer';

export default combineReducers({
    input: InputReducer
});
