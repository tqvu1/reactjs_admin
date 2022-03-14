import {
  getDefaultMiddleware,
  combineReducers,
  configureStore,
  ThunkAction,
  AnyAction,
} from '@reduxjs/toolkit';

import domain from './domain';
import ui from './ui';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  domain,
  ui,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;
export type Action<R = any> = ThunkAction<
  Promise<R>,
  RootState,
  null,
  AnyAction
>;
export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
