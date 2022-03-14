import { Action } from 'src/stores';
import { listActions } from 'src/stores/domain/transactionManage/transaction';
import transactionRequest from 'src/api/requests/transaction';
import appActions from 'src/stores/ui/app';
import { RequestParams } from 'src/interfaces/requestParams';
import * as SearchParams from 'src/interfaces/searchParams';

interface FetchResources extends RequestParams, SearchParams.TransactionList {}

const getParams = (args: FetchResources) => {
  const {
    search_type,
    period_search,
    search_text,
    status,
    type,
    from_date,
    to_date,
    per,
    page,
  } = args;

  const params = {
    [search_type!]: search_text,
    type,
    status,
    limit: per,
    page,
  };

  const isSameDate = from_date === to_date;
  const date = isSameDate ? from_date : undefined;
  const from = isSameDate ? undefined : from_date;
  const to = isSameDate ? undefined : to_date;

  switch (period_search) {
    case 'transaction_date':
      params.transaction_date = date;
      params.transaction_date_from = from;
      params.transaction_date_to = to;
      break;
  }

  return params;
};

export const fetchResources = (args: FetchResources): Action => {
  return async (dispatch) => {
    try {
      dispatch(listActions.updateLoading(true));

      const params = getParams(args);
      const res = await transactionRequest.getTransactionList({ ...params });
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
