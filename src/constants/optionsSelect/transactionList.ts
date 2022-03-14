export * from './common';

export const TRANSACTION_TYPE_SEARCH: App.OptionsFnc = (t) => [
  { label: t('column.transaction_id'), value: 'transaction_id' },
  { label: t('column.series_title'), value: 'series_title' },
  { label: t('column.episode_title'), value: 'episode_title' },
  { label: t('column.creator'), value: 'creator' },
  { label: t('column.buyer_nickname'), value: 'buyer_nickname' },
];

export const TRANSACTION_TYPE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '' },
  { label: t('transaction_type.each_episode'), value: '1' },
  { label: t('transaction_type.full_series'), value: '2' },
];

export const TRANSACTION_SALE_STATUS: App.OptionsFnc = (t) => [
  { label: t('all'), value: '' },
  { label: t('sale_status.sold'), value: '1' },
  { label: t('sale_status.error'), value: '2' },
];

export const TRANSACTION_TIME_TYPE: App.OptionsFnc = (t) => [
  { label: t('column.transaction_date'), value: 'transaction_date' },
];
