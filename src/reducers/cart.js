import { types } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ONE_TO_CART: {
      let count = state[action.payload];
      count = count + 1 || 1;
      return { ...state, [action.payload]: count };
    }

    case types.REMOVE_ONE_FROM_CART: {
      let count = state[action.payload];
      return { ...state, [action.payload]: count - 1 };
    }

    case types.REMOVE_ALL_FROM_CART: {
      const newState = {};
      for (const key of Object.keys(state)) {
        if (key !== action.payload) {
          newState[key] = state[key];
        }
      }

      return newState;
    }
    default:
      return state;
  }
};
