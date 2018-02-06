import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_OK, LOGIN_FAIL } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    console.log('Login');
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('OK');
                loginOk(dispatch, user);
                Actions.productCreate();
            })
            .catch((error) => {
                console.log('FAIL', error);
                loginFail(dispatch, { login: 'E-mail ou senha inválidos.' });
                //firebase.auth().createUserWithEmailAndPassword(email, password)
                //    .then(user => teste(dispatch, user))
                //    .catch(() => teste(dispatch));
            });
    };
};

export const loginFail = (dispatch, validation) => {
    dispatch({
        type: LOGIN_FAIL,
        payload: validation
    });
};


export const loginOk = (dispatch, user) => {
    dispatch({
        type: LOGIN_OK,
        payload: user
    });
};

