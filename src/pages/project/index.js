import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import CommonTitle from '../../components/CommonTitle';
import TabBar from '../../components/TabBar';

@connect(({project}) => ({
  ...project,
}))
export default class Project extends Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'common/editTabbar',
    });
  };

  render() {
    return (
      <View className="project-page">
        <CommonTitle text="项目中心"/>
        <TabBar/>
      </View>
    )
  }
}
