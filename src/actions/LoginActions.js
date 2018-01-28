import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
        console.log('oieeeeeee');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => teste(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => teste(dispatch, user))
                    .catch(() => teste(dispatch));
            });
    };
};

const teste = (dispatch, user) => {
    console.log(user);
};
