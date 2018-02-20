import {
    PRODUCT_LIST_BY_USER
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    //console.log(action.payload);
    switch (action.type) {
        case PRODUCT_LIST_BY_USER:
            return action.payload;
        default:
            return state;
    }
};
