import {
    PRODUCT_FIELD_CHANGED,
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
    //console.log(action);
    switch (action.type) {
        case PRODUCT_FIELD_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        case PRODUCT_SAVE_OK:
            return { ...state, validation: action.payload };
        case PRODUCT_SAVE_FAIL:
            return { ...state, validation: action.payload };
        default:
            return state;
    }
};
