import Taro from '@tarojs/taro'
/**
 *  弹出菜单
 */
export default class Alert {
  static alertNetError() {
    this.alertText('网络异常！')
  }
 
  static showLoading() {
    Taro.showLoading({
      title: '加载中...',
      mask: true
    })
  }
 
  static showLoadingText(text) {
    Taro.showLoading({
      title: text,
      mask: true
    })
  }
  static hideLoading() {
    Taro.hideLoading()
  }
  static alertText(text, type = 'loading') {
    Taro.showToast({
      title: text,
      icon: type,
      duration: 2000,
      mask: true
    })
  }
}
