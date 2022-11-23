// @ts-nocheck
import axios from 'axios';

const utRequest = axios.create({
  baseURL: '', //
  timeout: 100000,
});

// 请求拦截,所有的网络请求都会先走这个方法
utRequest.interceptors.request.use(
  function (config) {
    const nextConfig = Object.assign(config, {
      // withCredentials: true,
      data: Object.assign(config.data || {}, {
        //默认data内容
      }),
    });
    return nextConfig;
  },
  function (err) {
    return Promise.reject(err);
  },
);

// 请求拦截,所有的网络请求都会先走这个方法
utRequest.interceptors.response.use(
  function (response) {
    try {
      return response.data.result;
    } catch (e) {
      return {};
    }
  },
  function (err) {
    return Promise.reject(err);
  },
);

export default utRequest;
