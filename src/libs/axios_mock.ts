import axiosBase, {
  AxiosRequestConfig,
  AxiosInterceptorManager,
  AxiosResponse,
  AxiosInstance,
} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://5e633910f48bc60014536a40.mockapi.io/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

export default class Axios {
  public instance: AxiosInstance;

  public interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<any>>;
  };

  public constructor() {
    this.instance = axiosBase.create(config);
    this.interceptors = this.instance.interceptors;
  }
}
