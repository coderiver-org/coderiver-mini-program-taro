import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({discover}) => ({
  ...discover,
}))
export default class Discover extends Component {
  config = {
    navigationBarTitleText: '',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="discover-page">
        discover
      </View>
    )
  }
}
