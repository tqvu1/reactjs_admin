import qs from 'query-string';
import { TablePaginationConfig } from 'antd/lib/table';

import useQueryUrl from './useQueryUrl';
import history from 'src/libs/history';
import { Pagination } from 'src/interfaces/pagination';

type PaginationProps = {
  total: number;
  per: number;
};

const usePagination = ({ total, per }: PaginationProps) => {
  const query = useQueryUrl();

  const pagination: Pagination = {
    total: total,
    current: query.page ? Number(query.page) : 1,
  };

  const onChangePage = (page: number) => {
    history.push({
      search: qs.stringify({ ...query, page }),
    });
  };

  const paginationProps: TablePaginationConfig = {
    ...pagination,
    onChange: onChangePage,
    defaultPageSize: query.per ? Number(query.per) : per,
    showSizeChanger: false,
  };

  return {
    pagination: paginationProps,
  };
};

export default usePagination;
