import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Home from './pages/home'
import dva from './utils/dva'
import models from './models'
import { Provider } from '@tarojs/redux'

import './styles/base.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/project/index',
      'pages/add/index',
      'pages/hero/index',
      'pages/discover/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'coderiver-taro',
      navigationBarTextStyle: 'black',
      navigationBarStyle: 'custom',
    },
    tabBar: {
      list: [{
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./images/tab/home.png",
        selectedIconPath: "./images/tab/home-active.png"
      }, {
        pagePath: "pages/project/index",
        text: "项目中心",
        iconPath: "./images/tab/cart.png",
        selectedIconPath: "./images/tab/cart-active.png"
      },{
        pagePath: "pages/add/index",
        text: "",
        iconPath: "./images/tab/user.png",
        selectedIconPath: "./images/tab/user-active.png"
      },{
        pagePath: "pages/hero/index",
        text: "英雄广场",
        iconPath: "./images/tab/home.png",
        selectedIconPath: "./images/tab/home-active.png"
      },{
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./images/tab/cart.png",
        selectedIconPath: "./images/tab/cart-active.png"
      }],
      color: "#9F9F9F",
      selectedColor: "#458FE4",
      backgroundColor: '#fff',
      borderStyle: '#ccc'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
