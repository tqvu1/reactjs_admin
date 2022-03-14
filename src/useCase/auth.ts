import { createAsyncThunk } from '@reduxjs/toolkit';

import history from 'src/libs/history';
import auth from 'src/api/requests/auth';
import notification from 'src/stores/ui/notification';
import LocalStorage from 'src/utils/LocalStorage';

export const login = createAsyncThunk<void, Payload.Credentials>(
  'login',
  async (credentials, { dispatch }) => {
    try {
      const res = await auth.postLogin(credentials);

      const info = res.data.data;

      LocalStorage.setToken(info);
      const { access_token } = info;
      await dispatch(me(access_token));

      history.push('/');
      dispatch(
        notification.onNotification({
          type: 'success',
          message: 'Success',
        }),
      );
    } catch (err) {
      dispatch(
        notification.onNotification({
          type: 'error',
          message: 'Error',
        }),
      );
    }
  },
);

export const me = createAsyncThunk<void, string>('me', async (token) => {
  try {
    const authInfo = await auth.me();
    LocalStorage.saveAuthInfo(authInfo.data);
  } catch (err) {
    console.error(err);
  }
});
