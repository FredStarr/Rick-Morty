import { ADD_LIKES } from '../types';
import { REMOVE_LIKES } from '../types';

export const addLikes = (payload) => ({ type: ADD_LIKES, payload });
export const removeLikes = (payload) => ({ type: REMOVE_LIKES, payload });
