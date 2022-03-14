import React from 'react';
import { Link } from 'react-router-dom';

import { Transaction } from 'src/stores/domain/transactionManage/transaction/list';
import { SaleStatus, TransactionType } from 'src/components/Common';
import { formatDate, formatToken } from 'src/utils/Helpers';

const columns: App.ColumnsFnc<Transaction> = (t) => [
  {
    title: t('column.transaction_id'),
    dataIndex: 'id',
    // eslint-disable-next-line react/display-name
    render: (text: string, row) => {
      return (
        <Link to={{ pathname: `/transaction/detail/${row.id}` }}>{text}</Link>
      );
    },
  },
  {
    title: t('column.transaction_type'),
    dataIndex: 'type',
    // eslint-disable-next-line react/display-name
    render: (text) => {
      return <TransactionType type={text} />;
    },
  },
  {
    title: t('column.series_title'),
    dataIndex: 'series_title',
  },
  {
    title: t('column.episode_title'),
    dataIndex: 'episode_title',
  },
  {
    title: t('column.creator'),
    dataIndex: 'creator',
  },
  {
    title: t('column.buyer_nickname'),
    dataIndex: 'buyer_nickname',
  },
  {
    title: t('column.amount_ftsy'),
    dataIndex: 'amount_ftsy',
    render(text) {
      return formatToken(text);
    },
    className: 'cell-nowrap',
  },
  {
    title: t('column.sale_status'),
    dataIndex: 'sale_status',
    // eslint-disable-next-line react/display-name
    render: (text) => {
      return <SaleStatus status={text} />;
    },
  },
  {
    title: t('column.transaction_date'),
    dataIndex: 'transaction_date',
    render(text) {
      return formatDate(text);
    },
    className: 'cell-nowrap',
  },
];

export default columns;
