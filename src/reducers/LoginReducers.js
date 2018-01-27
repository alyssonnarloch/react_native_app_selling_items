import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    text: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, text: action.payload };
        default:
            return state;
    }
};
