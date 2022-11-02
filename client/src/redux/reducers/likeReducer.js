import { ADD_LIKES } from '../types';
import { REMOVE_LIKES } from '../types';

const likeReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LIKES:
      return [...state, payload];

    case REMOVE_LIKES:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};

export default likeReducer;
