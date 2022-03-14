import i18n from 'i18next';
import { initReactI18next, TFunction } from 'react-i18next';

import en from 'src/locales/en.json';
import ko from 'src/locales/ko.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  lng: 'ko',
  resources: {
    en: {
      translation: en,
    },
    ko: {
      translation: ko,
    },
  },
});

/**
 * Translate by key.
 *
 * @param key
 * @param option
 * @returns {string}
 */

const I18n = i18n;
const t: TFunction = (...args: Parameters<TFunction>) => I18n.t(...args);

export { I18n, t };
