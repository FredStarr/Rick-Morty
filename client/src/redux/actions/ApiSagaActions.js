const { GET_PERSONSBYNAME, SET_PERSONSBYNAME } = require('../types');

export const setPerson = (value) => ({
  type: SET_PERSONSBYNAME,
  payload: value,
});

export const getPerson = (input) => ({
  type: GET_PERSONSBYNAME,
  payload: input,
});
