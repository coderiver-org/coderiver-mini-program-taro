import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import CommonTitle from '../../components/CommonTitle';

@connect(({project}) => ({
  ...project,
}))
export default class Project extends Component {
  config = {
    navigationBarTitleText: '',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="project-page">
        <CommonTitle text="项目中心"/>
      </View>
    )
  }
}
