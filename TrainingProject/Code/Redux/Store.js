import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import ApiReducer from './ApiReducer';
import LoginReducer from './Login/LoginReducer';

const appReducers = combineReducers({
  ApiReducer,
  LoginReducer:LoginReducer
  
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));