import axios from 'axios';

import { GET_PERSONS } from '../types';

export const getAllPers = (payload) => ({ type: GET_PERSONS, payload });

export const getAllPersons = (input) => async (dispatch) => {
  axios(`https://rickandmortyapi.com/api/character/${input}`)
    .then((res) => dispatch(getAllPers(res.data)));
};
