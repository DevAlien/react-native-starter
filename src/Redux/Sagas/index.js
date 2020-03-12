import {put, takeLatest, all} from 'redux-saga/effects';
import {appActionTypes} from '../Reducers/AppReducer';
import NavigationSagas from './NavigationSagas';

const appLoad = function*() {
  try {
    //You can retrieve some data, post some data etc, when you are ready call the APP_LOADED
    yield put({
      type: appActionTypes.APP_LOADED,
    });
  } catch (error) {
    console.error('sagas.index.appLoad', error);
  }
};

const defaultSaga = function*() {
  yield all([takeLatest('APP_LOAD', appLoad), ...NavigationSagas]);
};

export default defaultSaga;
