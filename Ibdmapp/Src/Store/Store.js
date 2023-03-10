/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore ,persistReducer} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiReducer from '../Redux/Reducers/ApiReducer';
import mpinReducer from '../Redux2/Mpin/MpinReducer';
import LoginReducer from '../Redux2/Login/LoginReducer';
import FilterReducer from '../Redux2/FilterApi//FilterReducer';



/*
const appReducers = combineReducers({
  Login: loginReducer,
  mpinReducer: mpinReducer,
  ApiReducer:apiReducer
});

const rootReducers = (state, action) => appReducers(state, action);

const logger = createLogger();
*/



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [ 'Login', 'mpinReducer','apiReducer','FilterReducer'],
  // whitelist: ['events','Login','mpinReducer','projectListReducer','timeCardReducer','matterTimeCardReducer','notificationReducer'],
};
const rootReducers = combineReducers({
Login:LoginReducer,
mpinReducer:mpinReducer,
apiReducer:apiReducer,
FilterReducer:FilterReducer,



});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);

