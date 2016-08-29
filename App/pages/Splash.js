'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

import Login from './Login';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigator} = this.props;
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: Login,
          name: 'Login'
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