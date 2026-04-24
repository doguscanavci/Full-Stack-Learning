import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger'; // Opsiyonel: Geliştirme sürecini kolaylaştırır
import reducer from './reducers';

export const myStore = createStore(reducer, applyMiddleware(thunk, logger));
