import { types } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      let count = state[action.payload];
      count = count + 1 || 1;
      return { ...state, [action.payload]: count };
    }
    case types.REMOVE_FROM_CART: {
      let count = state[action.payload];
      if (count === 1) {
        const newState = {};
        for (const key of Object.keys(state)) {
          if (key !== action.payload) {
            newState[key] = state[key];
          }
        }

        return newState;
      }

      return { ...state, [action.payload]: count - 1 };
    }
    default:
      return state;
  }
};
