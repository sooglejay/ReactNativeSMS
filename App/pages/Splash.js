'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
  AsyncStorage,
} from 'react-native';

import Login from './Login';
import AppMain from './AppWrapper';
import {key_isLogined, value_isLogined} from'../common/Storage';
var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  async foo() {
    let isLogined = '';
    try {
      isLogined = await AsyncStorage.getItem(key_isLogined);
      if (isLogined !== null) {
        console.log("取登录的值不为null:" + isLogined);
        // We have data!!
      }
    } catch (error) {
      // Error retrieving data
    } finally {
      console.log("用户是否登录:" + isLogined);
      const {navigator} = this.props;
      this.timer = setTimeout(() => {
        InteractionManager.runAfterInteractions(() => {
          navigator.resetTo({
            component: isLogined === value_isLogined ? AppMain : Login,
            title: 'Login'
          });
        });
      }, 2500);
    }
  }
  componentDidMount() {
    this.foo();
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'#1ba0ec' }}>
        <Image
          style={{alignSelf:'center', width: width / 3, height: width / 3 }}
          source={require('../imgs/icon_university.png') }
          />
      </View>
    );
  }
}
export default Splash;