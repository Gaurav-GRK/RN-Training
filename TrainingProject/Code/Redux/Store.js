import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ApiReducer from './ApiReducer';
import LoginReducer from './Login/LoginReducer';
import FilterReducer from './FilterApi/FilterReducer';
import mpinReducer from './Mpin/MpinReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationReducer from './Notification/NotificationReducer';
import PickerReducer from './Picker/PickerReducer';


const appReducers = combineReducers({
  Login: LoginReducer,
  mpinReducer: mpinReducer,
  ApiReducer: ApiReducer,
  FilterReducer: FilterReducer,
  NotificationReducer: NotificationReducer,
  PickerReducer: PickerReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

/*const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [ 'Login', 'mpinReducer'],  
};
const rootReducer = combineReducers({
  Login: LoginReducer,
  mpinReducer: mpinReducer,
  FilterReducer:FilterReducer,
  ApiReducer:ApiReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);*/