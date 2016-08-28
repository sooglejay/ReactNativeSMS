//根据页面
'use strict';

import React from 'react';
import { StyleSheet, Navigator, StatusBar, BackAndroid, View, Platform } from 'react-native';

import Splash from './pages/Splash';
import { NaviGoBack } from './utils/CommonUtils';
export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)
export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19
var _navigator;
class SplashApp extends React.Component {

  // ...

  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.goBack = this.goBack.bind(this);
    BackAndroid.addEventListener('hardwareBackPress', this.goBack);
  }

  goBack() {
    return NaviGoBack(_navigator);
  }

  renderScene(route, navigator) {
    let Component = route.component;
    _navigator = navigator;
    return (
      <View>
        <StatusBar
          hidden={route.statusBarHidden}/>
        <Component
          { ...route }
          navigator={ navigator }
          />
      </View>
    );
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <View style={ { flex: 1 } }>
        <StatusBar
          barStyle='light-content'
          ref="StatusBar"
          backgroundColor='#2bb4f7'
          style={ { height: STATUS_BAR_HEIGHT } } />
        <Navigator
          ref='navigator'
          style={ styles.navigator }
          configureScene={ this.configureScene }
          renderScene={ this.renderScene }
          initialRoute={ { component: Splash, title: 'Splash',statusBarHidden:'true' } } />
      </View>
    );
  }
}
let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default SplashApp;

