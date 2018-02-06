import  { Actions } from 'react-native-router-flux';
import { empty } from '../validation/ProductValidation';
import {
    NAME_CHANGED,
    DESCRIPTION_CHANGED,
    LINK_CHANGED,
    PRICE_CHANGED,
    TYPE_CHANGED,
    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_OK
} from './types';

export const linkChanged = (text) => {
    return {
        type: LINK_CHANGED,
        payload: text
    };
};

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const save = ({ name, linkImage }) => {
    return (dispatch) => {
        let error = false;
        let validation = {};

        if (empty(name)) {
            error = true;
            validation.name = 'Nome Obrigatório';
            fail(dispatch, validation);
        }
        
        if (empty(linkImage)) {
            error = true;
            validation.linkImage = ' Link Obrigatório';
            fail(dispatch, validation);
        } 
        
        if (!error) {
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
        payload: {}
    });
};
