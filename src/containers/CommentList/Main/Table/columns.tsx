import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import { CommentEntity } from 'src/stores/domain/comment/list';
import { formatDate } from 'src/utils/Helpers';
// import { formatCount, formatDate } from 'src/utils/Helpers';

const columns: App.ColumnsFnc<CommentEntity> = (t) => [
  {
    title: t('column.name'),
    dataIndex: 'name',
    // eslint-disable-next-line react/display-name
    render: (text: string, row) => {
      return (
        <Link to={{ pathname: `/comment/${row.id}` }}>
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
    title: t('column.series'),
    dataIndex: 'series_title',
  },
  {
    title: t('column.episode'),
    dataIndex: 'episode',
  },
  {
    title: t('column.creator'),
    dataIndex: 'creator',
    className: 'cell-nowrap',
  },
  {
    title: t('column.comment_content'),
    dataIndex: 'comment_content',
  },
  {
    title: t('column.number_of_times_reported'),
    dataIndex: 'number_of_times_reported',
  },
  {
    title: t('column.like'),
    dataIndex: 'like',
  },
  {
    title: t('column.dislike'),
    dataIndex: 'dislike',
  },
  {
    title: t('column.comment_date'),
    dataIndex: 'comment_date',
    render(text: string) {
      return formatDate(text);
    },
    className: 'cell-nowrap',
  },
];

export default columns;
