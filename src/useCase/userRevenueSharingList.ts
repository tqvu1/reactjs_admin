import { Action } from 'src/stores';
import { listActions } from 'src/stores/domain/user/userRevenueSharing';
import userRequest from 'src/api/requests/user';
import appActions from 'src/stores/ui/app';
import { RequestParams } from 'src/interfaces/requestParams';
import * as SearchParams from 'src/interfaces/searchParams';

interface FetchResources
  extends RequestParams,
    SearchParams.UserRevenueSharingList {}

const getParams = (args: FetchResources) => {
  const { search_type, search_text, per, page } = args;

  return {
    [search_type!]: search_text,
    limit: per,
    page,
  };
};

export const fetchResources = (args: FetchResources): Action => {
  return async (dispatch) => {
    try {
      dispatch(listActions.updateLoading(true));

      const params = getParams(args);
      const res = await userRequest.getRevenueSharingList({ ...params });
      const { pagination, data } = res.data;

      if (data) {
        dispatch(listActions.updateEntities(data));
      }

      if (pagination) {
        dispatch(
          appActions.updatePagination({
            total: pagination.total,
            current: pagination.current_page,
          }),
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(listActions.updateLoading(false));
      dispatch(appActions.updateLoading(false));
    }
  };
};
