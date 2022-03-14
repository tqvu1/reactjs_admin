export * from './common';

export const LIKE_TYPE_SEARCH: App.OptionsFnc = (t) => [
  { label: t('column.nick_name'), value: 'nickname' },
  { label: t('column.user_id'), value: 'user_id' },
];

export const LIKE_TIME_TYPE: App.OptionsFnc = (t) => [
  { label: t('sign_up_date'), value: 'register_date' },
  { label: t('last_visit_date'), value: 'last_visited_date' },
];
