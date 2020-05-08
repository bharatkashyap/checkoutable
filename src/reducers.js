import { SET_ITEM_QUANTITY } from './actions';

function itemsById(state = {}) {
    return state;
}

function cart(state = {}, action) {
    switch(action.type) {
        case SET_ITEM_QUANTITY:
            return {
                ...state,
                [action.itemId] : action.value === '' ? action.value : parseInt(action.value)
            }
        default:
            return state
    }
}

function checkoutable(state = {}, action) {
    return {
        itemsById: itemsById(state.itemsById, action),
        cart: cart(state.cart, action)
    }
}

export default checkoutable;