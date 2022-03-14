import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import { UserCreator } from 'src/stores/domain/user/userCreator/list';
import { ActivitiesStatus } from 'src/components/Common';
import { formatCount, formatDate } from 'src/utils/Helpers';

const columns: App.ColumnsFnc<UserCreator> = (t) => [
  {
    title: t('column.name'),
    dataIndex: 'name',
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
    title: t('column.phone'),
    dataIndex: 'phone',
    className: 'cell-nowrap',
  },
  {
    title: t('column.series_count'),
    dataIndex: 'series_count',
    render: (text) => {
      return formatCount(text);
    },
  },
  {
    title: t('column.login_times'),
    dataIndex: 'login_times',
    render: (text) => {
      return formatCount(text);
    },
  },
  {
    title: t('column.last_visit'),
    dataIndex: 'last_visited_at',
    render(text) {
      return formatDate(text);
    },
    className: 'cell-nowrap',
  },
  {
    title: t('column.signup_date'),
    dataIndex: 'insert_dt',
    render(text) {
      return formatDate(text);
    },
    className: 'cell-nowrap',
  },
  {
    title: t('column.activity_status'),
    dataIndex: 'is_block',
    // eslint-disable-next-line react/display-name
    render: (text) => {
      return <ActivitiesStatus is_blocked={text} />;
    },
  },
];

export default columns;
