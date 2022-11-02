import { GET_PERSONS } from '../types';

const personsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PERSONS:
      // console.log(payload);
      if (payload.length) {
        return payload;
      } return [payload];
    default:
      return [...state];
  }
};

export default personsReducer;
