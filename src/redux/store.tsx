import { Action, configureStore, ThunkAction, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import ProductReducer from './slices/products/slice';
import CartReducer from './slices/cart/slice';


const reducers = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
});


const persistConfig = {
  key: 'redux_',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);



export const store = configureStore({
  reducer: persistedReducer,
  devTools: false, // process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware() // [thunk]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;