import { ADD_TOAST, REMOVE_TOAST } from '../constants';

const initalState = {
    toasts: []
};

const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case ADD_TOAST:
            return {
                ...state, 
                toasts: [...state.toasts, action.payload.toast]
            };

        case REMOVE_TOAST:
            return {
                ...state,
                toasts: state.toasts.filter(toast => toast.id !== action.payload.toast.id)
            }
            
        default:
            return state;
    }
};

export default rootReducer;