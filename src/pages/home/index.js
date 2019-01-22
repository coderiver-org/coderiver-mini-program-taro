import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import CommonTitle from '../../components/CommonTitle';
import Recommend from '../../components/Recommend';
import TabBar from '../../components/TabBar';

import './index.scss'


@connect(({ home }) => ({
  ...home,
}))
class Home extends Component {

  componentDidMount () {
    this.props.dispatch({
      type: 'home/recommendProjects',
    });
    this.props.dispatch({
      type: 'home/recommendTeams',
    });
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {recommendProjects, recommendTeams} = this.props;
    return (
      <View className='home-page'>
        <CommonTitle text="为您推荐"/>
        {
          recommendProjects.length && recommendProjects.map((item, index) => {
            return <Recommend data={item} type="project" key={index+item.avatar}/>
          })
        }
        {
          recommendTeams.length && recommendProjects.map((item, index) => {
            return <Recommend data={item} type="team" key={index+item.avatar}/>
          })
        }
        <TabBar/>
      </View>
    )
  }
}

export default Home
