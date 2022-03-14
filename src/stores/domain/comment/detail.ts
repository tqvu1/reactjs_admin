import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentEntity } from './list';

type State = {
  loading: boolean;
  commentEntity: CommentEntity | null;
};

const initialState: State = {
  loading: false,
  commentEntity: null,
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'comment-detail',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<CommentEntity | null>) => {
      state.commentEntity = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
