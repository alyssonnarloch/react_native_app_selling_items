import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { empty } from '../validation/Common';
import {
    PRODUCT_FIELD_CHANGED,
    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_OK,
    PRODUCT_LIST_BY_USER
} from './types';

export const productFieldChanged = ({ prop, value }) => {
    return {
        type: PRODUCT_FIELD_CHANGED,
        payload: { prop, value }
    };
};

export const productListByUser = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
       firebase.database().ref(`/products/${currentUser.uid}`)
            .on('value', snapshot => {
                dispatch({ type: PRODUCT_LIST_BY_USER, payload: snapshot.val() });
            });
    };
};

export const save = ({ name, description, linkImage, price, type }) => {
    const { currentUser } = firebase.auth();

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
            firebase.database().ref(`/products/${currentUser.uid}`)
                .push({ name, description, linkImage, price, type })
                .then(() => {
                    Actions.productList();
                });
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
