import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RevenueSharing = {
  id: string;
  nickname: string;
  user_id: string;
  email: string;
  series_count: number;
  revenue_sharing_count: number;
  is_sharing_revenue: boolean | string;
};

type State = {
  loading: boolean;
  entities: RevenueSharing[];
};

const initialState: State = {
  loading: false,
  entities: [],
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'user_revenue_sharing',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<RevenueSharing[]>) => {
      state.entities = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
