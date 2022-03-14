export const BATTERY_LEVELS: App.OptionsFnc = (t) => [
  { label: t('all'), value: '' },
  { label: t('battery_level.1'), value: '1' },
  { label: t('battery_level.2'), value: '2' },
  { label: t('battery_level.3'), value: '3' },
  { label: t('battery_level.4'), value: '4' },
  { label: t('battery_level.5'), value: '5' },
];

export const TIME_TYPE: App.OptionsFnc = (t) => [
  { label: t('sign_up_date'), value: 'register_date' },
  { label: t('withdraw_date'), value: 'quited_date' },
  { label: t('last_visit_date'), value: 'last_visited_date' },
];

export const RANGE_PICKERS: App.OptionsFnc = (t) => [
  { label: t('button.today'), value: 'today' },
  { label: t('button.yesterday'), value: 'yesterday' },
  { label: t('button.week'), value: 'week' },
  { label: t('button.month'), value: 'month' },
];

export const STATISTIC_RANGE_PICKERS: App.OptionsFnc = (t) => [
  { label: t('label.today'), value: 'today' },
  { label: t('label.yesterday'), value: 'yesterday' },
  { label: t('label.week_ago'), value: 'week' },
  { label: t('label.month_ago'), value: 'month' },
];

export const CATEGORY_STATUS: App.OptionsFnc = (t) => [
  { label: t('active'), value: 'active' },
  { label: t('deactivate'), value: 'deactivate' },
];
