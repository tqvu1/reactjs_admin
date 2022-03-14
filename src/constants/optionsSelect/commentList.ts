export * from './common';

export const COMMENT_TYPE_SEARCH: App.OptionsFnc = (t) => [
  { label: t('nickname'), value: 'nickname' },
  { label: t('content'), value: 'content' },
];

export const SERIES_OPTIONS: App.OptionsFnc = (t) => [
  { label: t('conan'), value: 'conan' },
  { label: t('doraemon'), value: 'doraemon' },
  { label: t('Blood stain'), value: 'Blood stain' },
];
