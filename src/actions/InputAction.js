import { EMAIL_CHANGED } from './types';

export const inputChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
