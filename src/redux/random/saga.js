import types from '../types';
import {put, takeLatest, call} from 'redux-saga/effects';
import {api} from '../../services/api';

export function* getRandomJoke(action) {
  try {
    const {data} = yield call(api.getRandomJoke);
    yield put({type: types.GET_RANDOM_JOKE_SUCCESS, payload: data});
  } catch (error) {
    yield put({type: types.GET_RANDOM_JOKE_FAILURE});
  }
}

export function* watcherSagagetRandomJoke() {
  yield takeLatest(types.GET_RANDOM_JOKE_START, getRandomJoke);
}
