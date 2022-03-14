import { AxiosRequestConfig } from 'axios';

export const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

export const STORAGE_KEY = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  AUTH_ME_INFO: 'me_info',
  LANG: 'lang',
};

export const APP_HEADER_HEIGHT = 64;

export const DATE_TIME = 'YYYY-MM-DD';
export const DATE_TIME_HOUR = 'YYYY-MM-DD HH:mm:ss';

export const PER = {
  default: 10,
  user_creator_list: 10,
  user_liked_list: 10,
};

export const DELAY = {
  default: 1000,
  store_suggestion: 1000,
};

export enum LANG {
  KO = 'ko',
  EN = 'en',
}

export const apiPrefix = '/o2o/admin/api';

export const fileTypes = ['image/png', 'image/jpeg'];
export const fileSize = 5; //Mb
