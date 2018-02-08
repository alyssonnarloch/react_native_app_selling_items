import  { Actions } from 'react-native-router-flux';
import { empty } from '../validation/Common';
import {
    PRODUCT_FIELD_CHANGED,
    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_OK
} from './types';

export const productFieldChanged = ({ prop, value }) => {
    return {
        type: PRODUCT_FIELD_CHANGED,
        payload: { prop, value }
    };
};

export const save = ({ name, description, linkImage, price, type }) => {
    return (dispatch) => {
        let error = false;
        let validation = {};

        if (empty(name)) {
            error = true;
            validation.name = 'Nome Obrigatório';
            fail(dispatch, validation);
        }
        
        if (empty(description)) {
            error = true;
            validation.description = 'Descrição Obrigatória';
            fail(dispatch, validation);
        }

        if (empty(linkImage)) {
            error = true;
            validation.linkImage = 'Link Obrigatório';
            fail(dispatch, validation);
        } 
        
        if (empty(price)) {
            error = true;
            validation.price = 'Preço Obrigatório';
            fail(dispatch, validation);
        } 
        
        if (empty(type)) {
            error = true;
            validation.type = 'Tipo Obrigatório';
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
