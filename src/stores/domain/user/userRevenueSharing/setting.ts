import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Series = {
  id: number;
  image: string;
  title: string;
  start_count: number;
  view_count: number;
  like_count: number;
  subscribe_count: number;
  platform_percent: number;
  creator_percent: number;
  start_date: string;
  end_date: string;
};

export type RevenueSharingSetting = {
  id: string;
  nickname: string;
  user_id: string;
  email: string;
  series_list: Series[];
  history: string;
};

type State = {
  loading: boolean;
  entity: RevenueSharingSetting | null;
};

const initialState: State = {
  loading: false,
  entity: null,
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'user_revenue_sharing_setting',
  initialState,
  reducers: {
    updateEntity: (state, action: PayloadAction<RevenueSharingSetting>) => {
      state.entity = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
