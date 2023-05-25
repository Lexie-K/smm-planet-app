import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import authReducer from './slices/formSignupSlice';
import loginReducer from './slices/formLoginSlice';
import userReducer from './slices/getUserInfoSlice';
import modalReducer from './slices/modalSlice';
import changePassReducer from './slices/formChangePassSlice'
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer,
  log: loginReducer,
  getUserInfo: userReducer,
  modal: modalReducer,
  changeUserpass: changePassReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
