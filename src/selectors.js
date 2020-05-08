export const getItemsState = (store) => { return store.itemsById; }
export const getCartState = (store) => { return store.cart; }

export const getTotalAmount = (store) => { 
        let totalAmount = 0;
        Object.keys(store.cart).forEach( (key, index) => {
            totalAmount += store.cart[key] * store.itemsById[key].price;
    })
    return totalAmount;
}