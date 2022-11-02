import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AllPersonsReducer from './reducers/allPersonsReducer';
import personsReducer from './reducers/personsReducer';
import likeReducer from './reducers/likeReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    id: personsReducer,
    all: AllPersonsReducer,
    likes: likeReducer
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
