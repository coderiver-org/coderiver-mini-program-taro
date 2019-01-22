import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import CommonTitle from '../../components/CommonTitle';

@connect(({hero}) => ({
  ...hero,
}))
export default class Hero extends Component {

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="hero-page">
        <CommonTitle text="英雄广场"/>
      </View>
    )
  }
}
