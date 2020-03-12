import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './Reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './Sagas';
import strings from '../Localization';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const rootStore = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

export const store = rootStore;

export const persist = callback =>
  persistStore(rootStore, null, () => {
    const storeUnsubscribe = store.subscribe(() => {
      const state = store.getState();
      if (state.app && state.app.loaded) {
        //TODO: store langauge in redux and load it if set
        strings.setLanguage(strings.getInterfaceLanguage() || 'en');
        storeUnsubscribe();
        callback();
      }
    });
    store.dispatch({type: 'APP_LOAD'});
  });
