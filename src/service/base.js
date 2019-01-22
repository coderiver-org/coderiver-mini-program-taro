import Taro from '@tarojs/taro'
let baseUrl = '/'
export default class Base {
  static fetch(...props) {
    let { url, method, data, header } = props[0]
    const defaultHeader = {
      'content-type': 'application/json'
    }
    return new Promise((resolve, reject) => {
      Taro.request({
          url: `${baseUrl}${url}`,
          header: header || defaultHeader,
          method: method || "POST",
          data,
        })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
}
