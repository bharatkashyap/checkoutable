export const SET_ITEM_QUANTITY = 'SET_ITEM_QUANTITY'

export function setItemQuantity(itemId, value) {
  return { type: SET_ITEM_QUANTITY, itemId, value }
}

