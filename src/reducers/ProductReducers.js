import {
    NAME_CHANGED,
    DESCRIPTION_CHANGED,
    LINK_CHANGED,
    PRICE_CHANGED,
    TYPE_CHANGED,
    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_OK
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    description: '',
    linkImage: '',
    price: '',
    type: '',
    validation: {}
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case NAME_CHANGED:
            return { ...state, name: action.payload };
        case DESCRIPTION_CHANGED:
            return { ...state, description: action.payload };
        case LINK_CHANGED:
            return { ...state, linkImage: action.payload };
        case PRICE_CHANGED:
            return { ...state, price: action.payload };
        case PRODUCT_SAVE_OK:
            return { ...state, validation: action.payload };
        case PRODUCT_SAVE_FAIL:
            return { ...state, validation: action.payload };
        default:
            return state;
    }
};
