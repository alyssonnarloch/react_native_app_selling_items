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
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginOk(dispatch, user);
                //Actions.productList();
                Actions.productCreate();
            })
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    loginOk(dispatch, user);
                    //Actions.productList();
                    Actions.productCreate();
                })
                .catch(() => loginFail(dispatch));
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

