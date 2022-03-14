import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button } from 'antd';

import { RevenueSharing } from 'src/stores/domain/user/userRevenueSharing/list';
import { formatCount, isSharingRevenue } from 'src/utils/Helpers';

const columns: App.ColumnsFnc<RevenueSharing> = (t) => [
  {
    title: t('column.nickname'),
    dataIndex: 'nickname',
    // eslint-disable-next-line react/display-name
    render: (text: string, row) => {
      return (
        <Link to={{ pathname: `/user_creator/detail/${row.id}` }}>
          <Avatar
            src={
              row.avatar_url ||
              'https://unloc.online/wp-content/uploads/2020/04/283-2833820_user-icon-orange-png.png'
            }
          />
          <span style={{ marginLeft: 8 }}>{text}</span>
        </Link>
      );
    },
    className: 'cell-nowrap',
  },
  {
    title: t('column.user_id'),
    dataIndex: 'id',
  },
  {
    title: t('column.email'),
    dataIndex: 'email',
  },
  {
    title: t('column.is_sharing_revenue'),
    dataIndex: 'is_sharing_revenue',
    render: (text) => {
      return isSharingRevenue(text);
    },
  },
  {
    title: t('column.series_count'),
    dataIndex: 'series_count',
    render: (text) => {
      return formatCount(text);
    },
  },
  {
    title: t('column.revenue_sharing_count'),
    dataIndex: 'revenue_sharing_count',
    render: (text) => {
      return formatCount(text);
    },
  },
  {
    title: t('column.action'),
    className: 'cell-nowrap',
    // eslint-disable-next-line react/display-name
    render: (text, row) => {
      return (
        <Link to={{ pathname: `/user_revenue_sharing/setting/${row.id}` }}>
          <Button type="primary">{t('button.setting')}</Button>
        </Link>
      );
    },
  },
];

export default columns;
