import uuid from 'uuid';
import { ADD_TOAST, REMOVE_TOAST } from '../constants';


export const addToast = ({ type, icon, content }) => ({
    type: ADD_TOAST,
    payload: {
        toast: {
            id: uuid.v1(),
            type,
            icon,
            content
        }
    }
});

export const removeToast = (id) => ({
    type: REMOVE_TOAST,
    payload: {
        toast: {
            id
        }
    }
});