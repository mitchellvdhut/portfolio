import { createStore } from 'redux';

const initialState = {
    isMenuOpen: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MENU':
            return {
                ...state,
                isMenuOpen: true,
            };
        case 'CLOSE_MENU':
            return {
                ...state,
                isMenuOpen: false,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;
