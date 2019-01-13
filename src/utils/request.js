import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';

const request_data = {
};

export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  Taro.showLoading({title: '加载中'})
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    Taro.hideLoading({title: '加载中'})
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,res.data);
      }
      // TODO: 根据接口定义修改
      // if (data.status !== 'ok') {
      //   Taro.showToast({
      //     title: `${res.data.error.message}~` || res.data.error.code,
      //     icon: 'none',
      //     mask: true,
      //   });
      // }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
