export const types = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

export const addToCart = (payload) => {
  return { type: types.ADD_TO_CART, payload };
};

export const removeFromCart = (payload) => {
  return { type: types.REMOVE_FROM_CART, payload };
};
