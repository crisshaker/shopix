export const types = {
  ADD_ONE_TO_CART: 'ADD_ONE_TO_CART',
  REMOVE_ALL_FROM_CART: 'REMOVE_FROM_CART',
  REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
};

export const addOneToCart = (payload) => {
  return { type: types.ADD_ONE_TO_CART, payload };
};

export const removeAllFromCart = (payload) => {
  return { type: types.REMOVE_ALL_FROM_CART, payload };
};

export const removeOneFromCart = (payload) => (dispatch, getState) => {
  const count = getState().cart[payload];
  if (count === 1) {
    return dispatch(removeAllFromCart(payload));
  }

  dispatch({ type: types.REMOVE_ONE_FROM_CART, payload });
};
