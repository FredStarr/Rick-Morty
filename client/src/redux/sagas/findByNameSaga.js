import {
  call, put, takeEvery, takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import { GET_PERSONSBYNAME } from '../types';
import { setPerson } from '../actions/ApiSagaActions';

const getCardsByName = (input) => axios(`https://rickandmortyapi.com/api/character/${input.input}`);

function* NameSagaWorker(action) {
  try {
    const sagaNames = yield call(getCardsByName, action.payload);
    console.log(sagaNames.data.results);
    yield put(setPerson(sagaNames.data.results));
  } catch (e) {
    console.log('eeeeeeeeeeeeeeeeeeeeee', e);
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* nameSagaWatcher() {
  yield takeEvery(GET_PERSONSBYNAME, NameSagaWorker);
}

export default nameSagaWatcher;
