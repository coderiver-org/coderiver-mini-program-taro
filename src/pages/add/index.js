import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({add}) => ({
  ...add,
}))
export default class Add extends Component {
  config = {
    navigationBarTitleText: '',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="add-page">
        add
      </View>
    )
  }
}
