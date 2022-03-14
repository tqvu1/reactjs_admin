export * from './common';

export const USER_ACTIVITY_STATUS: App.OptionsFnc = (t) => [
  { label: t('active'), value: 0 },
  { label: t('blocked'), value: 1 },
];
