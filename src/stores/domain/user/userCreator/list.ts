import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ActivityStatus = 1 | 0;

export type UserCreator = {
  id: number;
  nickname: string;
  email: string;
  series_count: number;
  login_times: number;
  last_visited_at: string | null;
  insert_dt: string | null;
  is_block: ActivityStatus;
};

type State = {
  loading: boolean;
  entities: UserCreator[];
};

const initialState: State = {
  loading: false,
  entities: [],
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'user_creator_list',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<UserCreator[]>) => {
      state.entities = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
