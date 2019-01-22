import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import PropTypes from 'prop-types';
import './index.scss';
import add_icon_close from '../../images/add/add_icon_close.png';
import add_icon_create_team from '../../images/add/add_icon_create_team.png';
import add_icon_create_project from '../../images/add/add_icon_create_project.png';

@connect(({add}) => ({
  ...add,
}))
export default class Add extends Component {
  static propTypes ={
    onToggleAdd: PropTypes.func,
  }

  static defaultProps = {
    onToggleAdd: function(){
    },
  };

  componentDidMount = () => {

  };
  onTouchMove(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    let {onToggleAdd} = this.props;
    return (
      <View className="add-page"
        onTouchMove={this.onTouchMove}
      >
        <View className="add-page-buttons">
          <Image src={add_icon_create_team} className="team"/>
          <Image src={add_icon_create_project} className="project"/>
        </View>

        <Image
          src={add_icon_close}
          onClick={onToggleAdd}
          className="close"
        />
      </View>
    )
  }
}
