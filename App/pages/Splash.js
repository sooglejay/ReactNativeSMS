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
import {isLogined} from'../common/Storage';
var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  async foo() {
    try {
      const value = await AsyncStorage.getItem(isLogined);
      console.log("取值成功");
      if (value !== null) {
        // We have data!!
        console.log("here:" + value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  componentDidMount() {
    var isLogined = this.foo();
    const {navigator} = this.props;
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: !isLogined ? Login : AppMain,
          title: 'Login'
        });
      });
    }, 1);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1, width: width, height: height }}
          source={require('../imgs/ic_welcome.jpg') }
          />
      </View>
    );
  }
}
export default Splash;