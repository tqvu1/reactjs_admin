import { Like } from 'src/stores/domain/user/userLiked/list';
import { formatCount, formatDate } from 'src/utils/Helpers';

const columns: App.ColumnsFnc<Like> = (t) => [
  {
    title: t('column.nick_name'),
    dataIndex: 'nickname',
  },
  {
    title: t('label.user_id'),
    render: (text, record) => {
      return record.like?.user_id;
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
    title: t('column.total_liked_numbers'),
    render: (text, record) => {
      return formatCount(record.like?.total_likes);
    },
  },
  {
    title: t('column.subscriber_count'),
    dataIndex: 'subscriber_count',
    render: (text) => {
      return formatCount(text);
    },
  },
  {
    title: t('column.view_count'),
    dataIndex: 'view_count',
    render: (text) => {
      return formatCount(text);
    },
  },
  {
    title: t('column.last_visit'),
    dataIndex: 'last_visited_at',
    render: (text) => {
      return formatDate(text);
    },
  },
  {
    title: t('column.signup_date'),
    dataIndex: 'insert_dt',
    render: (text) => {
      return formatDate(text);
    },
  },
];

export default columns;
