import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_OK,
    LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email: 'alysson@gmail.com',
    //email: '',
    password: '123456',
    //password: '',
    validation: {},
    user: null
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_FAIL:
            return { ...state, validation: action.payload };
        case LOGIN_OK:
            return { ...state, INITIAL_STATE, user: action.payload };
        default:
            return state;
    }
};
