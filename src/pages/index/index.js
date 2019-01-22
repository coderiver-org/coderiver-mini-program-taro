/**
 * 自定义tabbar入口页面
 */


import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import TabBar from '../../components/TabBar';
import add_icon_tab from '../../images/add/add_icon_tab.png';

import Home from '../home/index'
import Project from '../project/index'
import Hero from '../hero/index'
import Discover from '../discover/index'
import Add from '../add/index'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '',
  }
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      showAddModal: false,
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
            "icon": add_icon_tab,
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
  onToggleAdd = () => {
    this.setState({
      showAddModal: !this.state.showAddModal
    })
  }

  render() {
    let {currentPage, showAddModal, tabBar} = this.state;
    return (
      <View className="index-page">
        { currentPage === 'home'? <Home/> : null }
        { currentPage === 'project'? <Project/> : null }
        { currentPage === 'hero'? <Hero/> : null }
        { currentPage === 'discover'? <Discover/> : null }
        { showAddModal ? <Add onToggleAdd={this.onToggleAdd}/> : null }
        <TabBar
          tabBar={tabBar}
          currentPage={currentPage}
          onSwichTab={this.onSwichTab}
          onToggleAdd={this.onToggleAdd}
        />
      </View>
    )
  }
}
