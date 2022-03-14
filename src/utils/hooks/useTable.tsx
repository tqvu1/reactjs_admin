import React, { useState } from 'react';
import { Select, Space, Tag, TagProps } from 'antd';
import history from 'src/libs/history';
import { TablePaginationConfig, TableProps } from 'antd/lib/table';
import { useSelector } from 'react-redux';
import qs from 'query-string';

import { RootState } from 'src/stores';
import useQueryUrl from 'src/utils/hooks/useQueryUrl';
import { PER } from 'src/constants/app';
import { t } from 'src/libs/I18nService';

type UseTable = {
  hasSelect: boolean;
};

const useTable = <T extends { id: string | number }>(
  { hasSelect }: UseTable = { hasSelect: true },
) => {
  const query = useQueryUrl();
  const [rowKeysSelected, setRowKeysSelected] = useState<React.Key[]>([]);

  const pagination = useSelector((state: RootState) => state.ui.app.pagination);

  const onChangePage = (page: number) => {
    history.push({
      search: qs.stringify({ ...query, page }),
    });
  };

  const onChangePageSize = (per) => {
    history.push({
      search: qs.stringify({ ...query, per, page: 1 }),
    });
  };

  const paginationProps: TablePaginationConfig = {
    ...pagination,
    onChange: onChangePage,
    pageSize: query.per ? Number(query.per) : PER.default,
    showSizeChanger: false,
    showTotal(total) {
      return (
        <Space>
          {`${total.toLocaleString()} ${t('label.items')}`}
          <Select
            size="small"
            value={query.per || String(PER.default)}
            onChange={onChangePageSize}
          >
            <Select.Option value={'10'}>10 / {t('page')}</Select.Option>
            <Select.Option value={'20'}>20 / {t('page')}</Select.Option>
            <Select.Option value={'50'}>50 / {t('page')}</Select.Option>
            <Select.Option value={'100'}>100 / {t('page')}</Select.Option>
          </Select>
        </Space>
      );
    },
  };

  const rowSelection: TableProps<T>['rowSelection'] = {
    type: 'checkbox',
    onSelect(data, checked) {
      if (checked) {
        setRowKeysSelected([...rowKeysSelected, data.id]);
        return;
      }

      const rowFiltered = rowKeysSelected.filter((row) => row !== data.id);
      setRowKeysSelected(rowFiltered);
    },
    onSelectAll(checked, changed, selected) {
      const listIds = selected.map((d) => d.id) as React.Key[];
      if (checked) {
        setRowKeysSelected([...rowKeysSelected, ...listIds]);
        return;
      }

      const rowFiltered = rowKeysSelected.filter(
        (key) => !listIds.includes(key),
      );
      setRowKeysSelected(rowFiltered);
    },
    selectedRowKeys: rowKeysSelected,
  };

  const Selected = (props: TagProps) => {
    if (rowKeysSelected.length) {
      return React.createElement(
        Tag,
        {
          closable: true,
          onClose: () => setRowKeysSelected([]),
          color: 'orange',
          style: {
            fontSize: 14,
            padding: '4px 8px',
          },
          ...props,
        },
        props.children,
      );
    }

    return null;
  };

  return {
    pagination: paginationProps,
    rowSelection: hasSelect ? rowSelection : undefined,
    Selected,
    rowSelected: rowKeysSelected,
  };
};

export default useTable;
