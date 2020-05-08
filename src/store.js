import { createStore } from 'redux';
import checkoutable from './reducers';

const initialState = {
    itemsById: {
        s1: {
            title: "Crocin 500mg",
            price: 20
        },
        s2: {
            title: "Keloggs Cornflakes",
            price: 250
        },
        s3: {
            title: "McVities Digestive Biscuits",
            price: 40
        },
        s4: {
            title: "Nestle Maggi 4x",
            price: 45
        },
        s5: {
            title: "Pilot v5",
            price: 55
        },
        s6: {
            title: "Amul Tetra Toned Milk 1L",
            price: 65
        }
    },
    items: ["s1", "s2", "s3", "s4", "s5", "s6"],
    cart: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0 }
}

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('state', serialisedState);
    }
    catch(e) {
        console.error(e);
    }
}

function loadFromLocalStorage(state) {
    const serialisedState = localStorage.getItem('state');
    try {
        if(serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch(e) {
        console.error(e);
        return undefined;
    }
}

const persistedState = Object.assign({}, initialState, loadFromLocalStorage());

const store = createStore(checkoutable, persistedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe( () => saveToLocalStorage(store.getState()));

export default store;