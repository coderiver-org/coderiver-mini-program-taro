import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

class TabBar extends Component {
  static propTypes ={
    onSwichTab: PropTypes.func,
    onToggleAdd: PropTypes.func,
  }

  static defaultProps = {
    onSwichTab: function(){
    },
    onToggleAdd: function(){
    },
  };
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }
  componentDidMount() {
  }

  render() {
    let { currentPage, tabBar, onSwichTab, onToggleAdd } = this.props;
    return (

      <View className="tab-bar-component">
        {
          tabBar && tabBar.list.length && tabBar.list.map((item, index) => {
            return <View
              className="tabbar-nav"
              key={item.page + index}
            >
              {
                item.isSpecial
                  ? <View className='special-wrapper'
                    onClick={onToggleAdd}
                  >
                    <Image className="tabbar-icon" src={item.icon} />
                  </View>
                  : <View
                    className="nav-item"
                    onClick={onSwichTab}
                    data-current={item.page}
                    key={item.pagePath + index}
                    style={{ color: currentPage === item.page ? tabBar.selectedColor : tabBar.color }}>
                    <Text className="letter">{item.letter}</Text>
                    <Text className="text">{item.text}</Text>
                  </View>
              }
            </View>
          })
        }
      </View>

    );
  }
}

export default TabBar;
