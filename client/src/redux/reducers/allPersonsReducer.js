import { GET_ALLPERSONS, SET_PERSONSBYNAME } from '../types';

const AllPersonsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALLPERSONS:
      // console.log(payload);
      return [...state, ...payload];
    case SET_PERSONSBYNAME:
      console.log('PAYLOADDDDDDDDDDDDDDD', payload);
      return payload;
    default:
      return state;
  }
};

export default AllPersonsReducer;
