import {fork} from 'redux-saga/effects';
import {watcherSagagetRandomJoke} from './random/saga';

export function* rootSaga() {
  yield fork(watcherSagagetRandomJoke);
}
