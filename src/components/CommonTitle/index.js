import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';
import avatar_default from '../../images/common/avatar_default.png';

class CommonTitle extends Component {
  static propTypes ={
    text: PropTypes.string,
    img: PropTypes.string,
  }

  static defaultProps = {
    text: '',
    img: avatar_default,
  };

  render() {
    const { text, img } = this.props;
    return (
      <View className="common-title-component">
        <Text className="text">{text}</Text>
        <Image className="img" src={img}/>
      </View>
    );
  }
}

export default CommonTitle;
