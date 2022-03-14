import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LikeInfoDetail = {
  user_id: number;
  product_likes: number;
  localpost_likes: number;
  localinfo_likes: number;
  total_likes: number;
};

export type Like = {
  id: string;
  nickname: string;
  series_count: number;
  subscriber_count: number;
  view_count: number;
  like: LikeInfoDetail;
  last_visited_at: string;
  insert_dt: string;
  update_dt: string;
  quited_at: string;
};

type State = {
  loading: boolean;
  entities: Like[];
};

const initialState: State = {
  loading: false,
  entities: [],
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'user_liked_list',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<Like[]>) => {
      state.entities = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
