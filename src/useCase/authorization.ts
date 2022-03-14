import { createAsyncThunk } from '@reduxjs/toolkit';
import history from 'src/libs/history';
import LocalStorage from 'src/utils/LocalStorage';
import uiActions from 'src/stores/ui/notification';
import appActions from 'src/stores/ui/app';
import Axios from 'src/libs/axios';

export const authorization = createAsyncThunk(
  'authorization',
  async (_, { dispatch }) => {
    if (history.location.pathname !== '/login') {
      try {
        const axios = new Axios();

        const res = await axios.instance.patch(
          '/clinic-admin/v1/auth/session',
          {
            data: {
              refresh_token: LocalStorage.refreshToken,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${LocalStorage.accessToken}`,
            },
          },
        );

        const info = res.data.data;
        LocalStorage.setToken(info);
        window.location.reload();
      } catch (err) {
        LocalStorage.removeInfo();
        history.push('/login');

        dispatch(appActions.updateAuthInfo(null));

        dispatch(
          uiActions.onNotification({
            type: 'error',
            message: 'Unauthorized',
          }),
        );
      }
    }

    return false;
  },
);
