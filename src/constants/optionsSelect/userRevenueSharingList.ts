export * from './common';

export const REVENUE_SHARING_TYPE_SEARCH: App.OptionsFnc = (t) => [
  { label: t('nickname'), value: 'nickname' },
  { label: t('email'), value: 'email' },
  { label: t('label.user_id'), value: 'user_id' },
];

export const USER_SHARING_REVENUE_TYPE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '' },
  { label: t('Y'), value: '1' },
  { label: t('N'), value: '0' },
];
