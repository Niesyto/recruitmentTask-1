export const shippingChanged = (shipping) => ({
    type: 'SHIPPING_CHANGED',
    shipping,  
  });
  
  export const taxesChanged = (taxes) => ({
    type: 'TAXES_CHANGED',
    taxes,
  });
  
  export const discountChanged = (promoCode) => ({
    type: 'DISCOUNT_CHANGED',
    promoCode
  });
  
  export const subtotalChanged = (subtotal) => ({
    type: 'SUBTOTAL_CHANGED',
    subtotal
  });

  export const itemsChanged = (items) => ({
    type: 'ITEMS_CHANGED',
    items
  });

  