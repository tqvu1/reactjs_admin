export * from './common';

export const USER_TYPE_SEARCH: App.OptionsFnc = (t) => [
  { label: t('nickname'), value: 'nickname' },
  { label: t('email'), value: 'email' },
  { label: t('label.user_id'), value: 'user_id' },
];

export const USER_ACTIVITY_STATUS: App.OptionsFnc = (t) => [
  { label: t('all'), value: '' },
  { label: t('active'), value: '0' },
  { label: t('blocked'), value: '1' },
];

export const USER_SHARING_REVENUE_TYPE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '' },
  { label: t('Y'), value: '1' },
  { label: t('N'), value: '0' },
];

export const USER_TIME_TYPE: App.OptionsFnc = (t) => [
  { label: t('sign_up_date'), value: 'register_date' },
  { label: t('last_visit_date'), value: 'last_visited_date' },
];
