import { LANG, STORAGE_KEY } from 'src/constants/app';

export class LocalStorage {
  static get accessToken() {
    return localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN) || null;
  }

  static get refreshToken() {
    return localStorage.getItem(STORAGE_KEY.REFRESH_TOKEN) || null;
  }

  static get authInfo() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY.AUTH_ME_INFO) || 'null');
  }

  static get lang() {
    return localStorage.getItem(STORAGE_KEY.LANG) || LANG.EN;
  }

  static setToken(payload: any) {
    localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, payload.access_token);
    localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, payload.refresh_token);
  }

  static saveAuthInfo(payload: any) {
    localStorage.setItem(STORAGE_KEY.AUTH_ME_INFO, JSON.stringify(payload));
  }

  static changeLang(lang: LANG) {
    localStorage.setItem(STORAGE_KEY.LANG, lang);
  }

  static removeInfo() {
    localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEY.AUTH_ME_INFO);
  }
}

export default LocalStorage;
