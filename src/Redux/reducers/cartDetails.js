const initialState = {
  subtotal: 0,
  shipping: 0,
  taxes: 2.5,
  discount: 0
}

export const cartDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'SHIPPING_CHANGED':
      return Object.assign({}, state, {
        shipping: action.shipping
      });
    case 'TAXES_CHANGED':
      return Object.assign({}, state, {
        taxes: action.taxes
      });
    case 'DISCOUNT_CHANGED':
      //If promocode is "" apply discount
      if (action.promoCode === "")
        return Object.assign({}, state, {
          discount: 0.3
        });
      else return Object.assign({}, state, {
        discount: 0
      });
    case 'SUBTOTAL_CHANGED':
      return Object.assign({}, state, {
        subtotal: action.subtotal
      })
    default:
      return state
  }
}

