import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import LocalStorage from 'src/utils/LocalStorage';
import { I18n } from 'src/libs/I18nService';

export type Lang = 'en' | 'ko';

type State = {
  lang: Lang;
  loading: boolean;
};

const initialState: State = {
  lang: 'en',
  loading: false,
};

export const switchLang = createAsyncThunk<any, Lang>(
  'changeLang',
  async (lang) => {
    await I18n.changeLanguage(lang);
    return lang;
  },
);

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'i18n',
  initialState,
  reducers: {
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateLang: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(switchLang.pending, (state) => {
        state.loading = true;
      })
      .addCase(switchLang.fulfilled, (state, action) => {
        state.loading = false;
        state.lang = action.payload;
      });
  },
});

export { reducer };
export default actions;
