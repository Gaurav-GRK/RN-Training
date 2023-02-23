/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiReducer from '../Redux/Reducers/ApiReducer';
import loginReducer from '../Login/LoginReducer';


const appReducers = combineReducers({
apiReducer,
loginReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
