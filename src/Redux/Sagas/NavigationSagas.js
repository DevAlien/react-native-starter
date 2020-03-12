import {takeLatest} from 'redux-saga/effects';
import Navigation from '../../Services/Navigation';

const navigateToSecond = function*(action) {
  try {
    //here you can load some data
    Navigation.navigate('Second', {data: action.data, from: 'Redux Saga'});
  } catch (e) {}
};

export default [takeLatest('LOAD_SECOND_SCREEN', navigateToSecond)];
