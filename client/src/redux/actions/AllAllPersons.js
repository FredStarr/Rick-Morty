import axios from 'axios';

import { GET_ALLPERSONS } from '../types';

export const getAllAllPers = (payload) => ({ type: GET_ALLPERSONS, payload });

export const getAllAllPersons = (i) => async (dispatch) => {
  axios(`https://rickandmortyapi.com/api/character/?page=${i}`)
    .then((res) => {
      // console.log('-----------------------', res.data.results);
      // console.log('-----------------------RES>DATA', res.data);
      dispatch(getAllAllPers(res.data.results));
    });
};
