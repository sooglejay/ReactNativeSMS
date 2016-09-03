import React, { Component } from 'react';
import { WebView, AsyncStorage } from 'react-native';
import {isLogined} from'../common/Storage';

class MyWeb extends Component {

  async foo() {
    let v = '';
    let output = '';
    v = await AsyncStorage.getItem(isLogined);
    for (var i in v) {
      output += i;
    }
    console.log("12:", output);
    output = '';
    await AsyncStorage.setItem(isLogined, false, (error, result) => {
      v = AsyncStorage.getItem(isLogined);
      for (var i in v) {
        output += i;
      }
      console.log("34:", output);
    });

  }
  render() {
    this.foo();
    return (
      <WebView
        source={{ uri: 'https://github.com/facebook/react-native' }}
        style={{ marginTop: 20 }}
        />
    );
  }
}
export default MyWeb;