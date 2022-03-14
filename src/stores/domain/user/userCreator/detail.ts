import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ActivityStatus = 1 | 0;

export type UserCreatorEntity = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  is_sharing_revenue: boolean | string;
  bio: string;
  series_count: number;
  login_times: number;
  wallet_address: string;
  last_visited_at: string | null;
  insert_dt: string | null;
  is_block: ActivityStatus;
};

type State = {
  loading: boolean;
  userCreatorEntity: UserCreatorEntity | null;
};

const initialState: State = {
  loading: false,
  userCreatorEntity: null,
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'user_creator_detail',
  initialState,
  reducers: {
    updateEntities: (
      state,
      action: PayloadAction<UserCreatorEntity | null>,
    ) => {
      state.userCreatorEntity = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
