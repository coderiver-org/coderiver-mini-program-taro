import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';
import icon_recommend_project from '../../images/common/icon_recommend_project.png';
import icon_recommend_team from '../../images/common/icon_recommend_team.png';

class Recommend extends Component {
  static propTypes = {
    data: PropTypes.object,
    type: PropTypes.string,
  }

  static defaultProps = {
    data: {},
    type: 'project',
  };

  render() {
    const { data, type } = this.props;
    return (
      <View className="recommend-component">
        <Text className="name">{data.name}</Text>
        <Text className="introduce">{data.introduce}</Text>
        <Image className="tag" src={type === 'project' ? icon_recommend_project : icon_recommend_team} />
        <Image className="avatar" src={data.avatar} />
      </View>
    );
  }
}

export default Recommend;
