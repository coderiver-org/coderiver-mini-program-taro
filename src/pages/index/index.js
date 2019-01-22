/**
 * 自定义tabbar入口页面
 */


import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import TabBar from '../../components/TabBar';
import icon_add from '../../images/common/tab_add.png';

import Home from '../home/index'
import Project from '../project/index'
import Hero from '../hero/index'
import Discover from '../discover/index'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '',
  }
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      tabBar: {
        "backgroundColor": "#ffffff",
        "color": "#9F9F9F",
        "selectedColor": "#4688F1",
        "list": [
          {
            "page": "home",
            "letter": "C",
            "text": "首页"
          },
          {
            "page": "project",
            "letter": "O",
            "text": "项目中心"
          },
          {
            "page": "add",
            "icon": icon_add,
            "isSpecial": true,
            "text": ""
          },
          {
            "page": "hero",
            "letter": "D",
            "text": "英雄广场"
          },
          {
            "page": "discover",
            "letter": "E",
            "text": "发现"
          },
        ]
      }
    }
  }

  componentDidMount = () => {

  };
  onSwichTab = (e) => {
    if (this.state.currentPage === e.currentTarget.dataset.current) {
      return false;
    } else {
      this.setState({
        currentPage: e.currentTarget.dataset.current
      })
    }
  }

  render() {
    let {currentPage, tabBar} = this.state;
    return (
      <View className="index-page">
        { currentPage === 'home'? <Home/> : null }
        { currentPage === 'project'? <Project/> : null }
        { currentPage === 'hero'? <Hero/> : null }
        { currentPage === 'discover'? <Discover/> : null }
        
        <TabBar
          tabBar={tabBar}
          currentPage={currentPage}
          onSwichTab={this.onSwichTab}
        />
      </View>
    )
  }
}
