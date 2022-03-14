import { Action } from 'src/stores';
import { detailActions } from 'src/stores/domain/user/userCreator';
import userRequest from 'src/api/requests_mock/user';
import appActions from 'src/stores/ui/app';
import uiActions from 'src/stores/ui/notification';
import { FormikHelpers } from 'formik';
import { t } from 'src/libs/I18nService';

export const fetchResources = (id: string): Action => {
  return async (dispatch) => {
    try {
      dispatch(detailActions.updateLoading(true));

      const res = await userRequest.getDetail(id);
      const { data } = res.data;

      if (data) {
        dispatch(detailActions.updateEntities(data));
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(detailActions.updateLoading(false));
      dispatch(appActions.updateLoading(false));
    }
  };
};

interface SaveUser {
  id: string;
  block?: number | string;
  meta: FormikHelpers<any>;
}

export const saveUser = ({ id, meta, ...rest }: SaveUser): Action => {
  return async (dispatch) => {
    try {
      const { block } = rest;
      const params = {
        block: !!block,
      };
      await userRequest.saveUser({ id, data: params });
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
