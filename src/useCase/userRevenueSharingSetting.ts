import { Action } from 'src/stores';
import { settingActions } from 'src/stores/domain/user/userRevenueSharing';
import userRequest from 'src/api/requests/user';
import appActions from 'src/stores/ui/app';
import uiActions from 'src/stores/ui/notification';
import { FormikHelpers } from 'formik';
import { t } from 'src/libs/I18nService';

export const fetchResources = (id: string): Action => {
  return async (dispatch) => {
    try {
      dispatch(settingActions.updateLoading(true));

      const res = await userRequest.getRevenueSharingDetail(id);
      const { data } = res.data;

      if (data) {
        dispatch(settingActions.updateEntity(data));
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(settingActions.updateLoading(false));
      dispatch(appActions.updateLoading(false));
    }
  };
};

interface SaveRevenueSharingSetting {
  id: string;
  data: {
    id: number;
    platform_percent: number;
    creator_percent: number;
  }[];
  meta: FormikHelpers<any>;
}

export const saveRevenueSharingSetting = ({
  id,
  meta,
  ...rest
}: SaveRevenueSharingSetting): Action => {
  return async (dispatch) => {
    try {
      const { data } = rest;
      await userRequest.saveRevenueSharingSetting({ id, data: data });
      meta.setStatus('done');

      await dispatch(fetchResources(id));
      dispatch(
        uiActions.onNotification({
          type: 'success',
          message: t('message.done'),
        }),
      );
    } catch (err) {
      meta.setStatus('done');
      dispatch(
        uiActions.onNotification({
          type: 'error',
          message: t('message.error'),
        }),
      );
      meta.resetForm();
    }
  };
};
