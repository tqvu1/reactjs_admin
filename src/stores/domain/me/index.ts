import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Me = {
  id: 1;
  email: string;
  name: string;
  avatar: string | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
};

type State = {
  loading: boolean;
  entity: Me | null;
};

const initialState: State = {
  loading: false,
  entity: null,
};

const { actions, reducer } = createSlice({
  name: 'me',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<Me | null>) => {
      state.entity = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
