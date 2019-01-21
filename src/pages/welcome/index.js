import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

import bg_welcome from '../../images/common/bg_welcome.png';
import icon_logo from '../../images/common/icon_logo.png';
import icon_weixin from '../../images/common/icon_weixin.png';
import icon_weibo from '../../images/common/icon_weibo.png';
import icon_github from '../../images/common/icon_github.png';

@connect(({ welcome }) => ({
  ...welcome,
}))
export default class Welcome extends Component {
  config = {
    // navigationBarTitleText: 'welcome',
    navigationBarBackgroundColor: '#3FAEA8',
    // navigationBarTextStyle: '#fff',
  };

  componentDidMount = () => {
    
  };

  switchTab(path) {
    // 切换到到tabbar
    Taro.switchTab({
      url: `/pages/${path}/index`
    })
  }

  render() {
    return (
      <View className="welcome-page">
        <Image className="logo" src={icon_logo} />
        <Text className="text">欢迎来到CodeRiver</Text>
        <View className="button-group">
          <Button className="button-item active"
            onClick={this.switchTab.bind(this, 'home')}
          >
            <Image className="icon" src={icon_github} />
            <Text className="text">使用Github账号登录</Text>
          </Button>
          <Button className="button-item"
            onClick={this.switchTab.bind(this, 'home')}
          >
            <Text className="text">创建账号</Text>
          </Button>
        </View>


        <View className="more-way">
          <Text className="title">更多登录方式</Text>
          <View className="login-way-items">
            <View className="item">
              <Image className="icon" src={icon_weixin} />
              <Text className="text">微信</Text>
            </View>
            <View className="item">
              <Image className="icon" src={icon_weibo} />
              <Text className="text">微博</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
