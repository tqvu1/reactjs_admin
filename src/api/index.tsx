import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import Axios from 'src/libs/axios';
import history from 'src/libs/history';
import LocalStorage from 'src/utils/LocalStorage';
import HttpStatusCode from 'src/constants/app/HttpStatusCode';
// import { authorization } from 'src/useCase/authorization';
// import { store } from 'src/stores';

export default class HTTPRequest extends Axios {
  public constructor() {
    super();

    this.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const accessToken = LocalStorage.accessToken;

        if (accessToken) {
          const headers = {
            Authorization: `Bearer ${accessToken}`,
          };

          config.headers = Object.assign(config.headers, headers);
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    this.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        const statusCode = error.response && error.response.status;

        switch (statusCode) {
          case HttpStatusCode.UNAUTHORIZED:
            // store.dispatch(authorization());
            break;
          case HttpStatusCode.FORBIDDEN:
            history.push('/403');
            break;
          case HttpStatusCode.NOT_FOUND:
            history.push('/404');
            break;
          case HttpStatusCode.INTERNAL_SERVER_ERROR:
            history.push('/500');
            break;
          default:
            break;
        }
        return Promise.reject(error);
      },
    );
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config);
  }

  public post<T = any, B = any>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.post(url, data, config);
  }

  public put<T = any, B = any>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.delete(url, config);
  }
}
