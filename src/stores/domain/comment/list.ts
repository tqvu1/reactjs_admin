import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CommentEntity = {
  id: number;
  nickname: string;
  user_id: string;
  series_title: string;
  episode: string;
  creator: string;
  comment_content: string;
  number_of_times_reported: number;
  like: number;
  dislike: number;
  comment_date: string;
};

type State = {
  loading: boolean;
  entities: CommentEntity[];
};

const initialState: State = {
  loading: false,
  entities: [],
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'comment_list',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<CommentEntity[]>) => {
      state.entities = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
