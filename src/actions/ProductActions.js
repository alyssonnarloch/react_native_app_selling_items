import  { Actions } from 'react-native-router-flux';
import {
    NAME_CHANGED,
    DESCRIPTION_CHANGED,
    LINK_CHANGED,
    PRICE_CHANGED,
    TYPE_CHANGED,
    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_OK
} from './types';

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const save = ({ name }) => {
    return (dispatch) => {
        if (name === '') {
            fail(dispatch, { name: 'Obrigatório' });
        } else {
            ok(dispatch);
        }
    };
};

export const fail = (dispatch, validation) => {
    dispatch({
        type: PRODUCT_SAVE_FAIL,
        payload: validation
    });
};


export const ok = (dispatch) => {
    dispatch({
        type: PRODUCT_SAVE_OK,
        payload: ''
    });
};
