import axiosBase, {
  AxiosRequestConfig,
  AxiosInterceptorManager,
  AxiosResponse,
  AxiosInstance,
} from 'axios';
import { config } from 'src/constants/app';

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
