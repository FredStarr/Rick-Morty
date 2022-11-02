import { all } from 'redux-saga/effects';
import nameSagaWatcher from './findByNameSaga';

export default function* rootSaga() {
  yield all([
    nameSagaWatcher(),
  ]);
}
