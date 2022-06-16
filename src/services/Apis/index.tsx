import axios, { AxiosInstance, Method } from "axios";
import queryString from "query-string";
import { LocalhostStorage } from "utils/sessionStorage";
export type IRequestParam = {
  method: Method;
  data: any;
  endpoint: string;
};

export class HttpService {
  private readonly http: AxiosInstance;

  constructor(baseUrl: string) {
    const instance = axios.create({
      baseURL: baseUrl,
      headers: {
        "content-type": "application/json",
      },
      paramsSerializer: params => queryString.stringify(params),
    });

    instance.interceptors.request.use(
      async config => {
        const token = LocalhostStorage.get("accessToken");

        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      error => Promise.reject(error)
    );

    instance.interceptors.response.use(
      response => {
        if (response.data) {
          return response.data;
        }
        return response;
      },
      error => {
        const err =
          (error.response && error.response.data && error.response.data) ||
          error;

        return Promise.reject(err); // Propagate rejection back to caller
      }
    );
    this.http = instance;
  }

  request = async ({ method, data = {}, endpoint = "/" }: IRequestParam) => {
    try {
      const res = await this.http[method](endpoint, data);
      const final = {
        success: !res.error,
        payload: res.result,
        message: res.message as string,
      };
      return final;
    } catch (e) {
      // if (e.statusCode === 401 && endpoint !== '/auth/renew-access-token') {
      // 	const rf = await refreshNewToken();
      // 	if (rf.isRefresh) {
      // 		const rs: {
      // 			success: boolean;
      // 			payload: any;
      // 			message: string;
      // 		} = await this.request({ method, endpoint, data });
      // 		return rs;
      // 	}
      // }
      return {
        success: false,
        message: e.message as string,
        payload: null,
      };
    }
  };
}

export default new HttpService("");
