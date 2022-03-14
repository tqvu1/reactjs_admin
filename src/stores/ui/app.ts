import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pagination } from 'src/interfaces/pagination';
import LocalStorage from 'src/utils/LocalStorage';

export type AuthInfo = object;

type State = {
  loading: boolean;
  pagination: Pagination | null;
  collapsed: boolean;
  authInfo: AuthInfo | null;
};

const initialState: State = {
  loading: false,
  pagination: null,
  collapsed: false,
  authInfo: null,
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'app',
  initialState,
  reducers: {
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updatePagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload;
    },
    updateCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    updateAuthInfo: (state, action: PayloadAction<AuthInfo | null>) => {
      LocalStorage.saveAuthInfo(action.payload);
      state.authInfo = action.payload;
    },
  },
});

export { reducer };
export default actions;
