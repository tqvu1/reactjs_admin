import { Action } from 'src/stores';
import { listActions } from 'src/stores/domain/user/userLiked';
import userRequest from 'src/api/requests/user';
import appActions from 'src/stores/ui/app';
import { RequestParams } from 'src/interfaces/requestParams';
import * as SearchParams from 'src/interfaces/searchParams';

interface FetchResources extends RequestParams, SearchParams.UserLikedList {}

const getParams = (args: FetchResources) => {
  const {
    search_type,
    period_search,
    search_text,
    from_date,
    to_date,
    per,
    page,
  } = args;

  const params = {
    [search_type!]: search_text,
    limit: per,
    page,
  };

  const isSameDate = from_date === to_date;
  const date = isSameDate ? from_date : undefined;
  const from = isSameDate ? undefined : from_date;
  const to = isSameDate ? undefined : to_date;

  switch (period_search) {
    case 'last_visited_date':
      params.last_visited_date = date;
      params.last_visited_from = from;
      params.last_visited_to = to;
      break;
    case 'register_date':
      params.register_date = date;
      params.register_from = from;
      params.register_to = to;
      break;
  }

  return params;
};

export const fetchResources = (args: FetchResources): Action => {
  return async (dispatch) => {
    try {
      dispatch(listActions.updateLoading(true));

      const params = getParams(args);
      const res = await userRequest.getLikedList({ ...params });
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
