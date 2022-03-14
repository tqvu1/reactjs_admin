import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TransactionType = 1 | 2;
export type SaleStatus = 1 | 2;

export type Transaction = {
  id: number;
  type: TransactionType;
  series_title: string;
  episode_title: string;
  creator: string;
  buyer_nickname: string;
  amount: string;
  sale_status: SaleStatus;
  transaction_date: string;
};

type State = {
  loading: boolean;
  entities: Transaction[];
};

const initialState: State = {
  loading: false,
  entities: [],
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'transaction_list',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<Transaction[]>) => {
      state.entities = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export { reducer };
export default actions;
