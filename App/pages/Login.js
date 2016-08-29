'use strict';
import React, { Component, PropTypes } from "react";
import { View, Text, ScrollView, BackAndroid, TouchableOpacity, Image, StyleSheet, InteractionManager, TextInput, Platform, ToastAndroid, NativeModules } from "react-native";
import TextField from 'react-native-md-textinput';
import ShortLineTwo from '../components/ShortLineTwo';
import { toastShort } from '../utils/ToastUtil';

import IndexApp from './IndexApp';
var EncryptionModule = NativeModules.EncryptionModule;


var username = '';
var password = '';
var verifycode = '';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {}
    }
    this.btnLoginClick = this.btnLoginClick.bind(this);
  }
  componentDidMount() {
    // loginRequestFromApiAsync();
  }
  loginRequestFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          text: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  btnLoginClick() {
    toastShort("you ");
    const {navigator} = this.props;
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: IndexApp,
          title: '首页'
        });
      });
    }, 2);
  }
  render() {
    return (
      <View style={ { backgroundColor: '#2bb4f7', flex: 1 } }>
        <ScrollView style={ { flex: 1 } }>
          <View>
            <Image
              source={ require('../imgs/icon_university.png') }
              style={ { marginTop: 60, width: 130, height: 130, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' } } />
            <Text style={ { color: 'white', fontSize: 18, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 40 } }>
              学生缴费服务平台
            </Text>
            <View style={ { flexDirection: 'row', backgroundColor: '#72cdf7', margin: 12, borderRadius: 9, height: 45, alignItems: 'center' } }>
              <Image
                source={ require('../imgs/login/icon_user_name.png') }
                style={ { width: 30, height: 30, marginLeft: 12 } } />
              <TextInput
                style={ { height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center', flex: 1 } }
                placeholder="请输入用户名"
                placeholderTextColor="#ffffffff"
                underlineColorAndroid="transparent"
                numberOfLines={ 1 }
                ref="username"
                returnKeyType="next"
                blurOnSubmit={ false }
                onSubmitEditing={ (event) => {
                  this.refs.password.focus();
                } }
                onChangeText={ (text) => {
                  username = text;
                } } />
              <TouchableOpacity
                onPress={ () => {
                } }
                style={ { width: 45, height: 45, alignItems: 'center', justifyContent: 'center' } }>
                <Image
                  source={ require('../imgs/login/icon_clear.png') }
                  style={ { width: 30, height: 30, marginLeft: 12 } } />
              </TouchableOpacity>
            </View>
            <View style={ { flexDirection: 'row', backgroundColor: '#72cdf7', marginLeft: 12, marginRight: 12, marginBottom: 12, borderRadius: 9, height: 45, alignItems: 'center' } }>
              <Image
                source={ require('../imgs/login/icon_password.png') }
                style={ { width: 30, height: 30, marginLeft: 12 } } />
              <TextInput
                style={ { height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center', flex: 1 } }
                placeholder="请输入密码"
                placeholderTextColor="#ffffff"
                underlineColorAndroid="transparent"
                numberOfLines={ 1 }
                ref="password"
                multiline={ true }
                secureTextEntry={ true }
                returnKeyType="next"
                blurOnSubmit={ false }
                onSubmitEditing={ (event) => {
                  this.refs.verifycode.focus();
                } }
                onChangeText={ (text) => {
                  password = text;
                } } />
              <TouchableOpacity
                onPress={ () => {
                } }
                style={ { width: 45, height: 45, alignItems: 'center', justifyContent: 'center' } }>
                <Image
                  source={ require('../imgs/login/icon_tag.png') }
                  style={ { width: 30, height: 30, marginLeft: 12 } } />
              </TouchableOpacity>
            </View>
            <View style={ { flexDirection: 'row', marginLeft: 12, marginRight: 12, marginBottom: 12, alignItems: 'center' } }>
              <View style={ { flex: 2, marginRight: 6, flexDirection: 'row', backgroundColor: '#72cdf7', borderRadius: 9, height: 45, alignItems: 'center' } }>
                <Image
                  source={ require('../imgs/login/icon_tag.png') }
                  style={ { width: 30, height: 30, marginLeft: 12 } } />
                <TextInput
                  style={ { flex: 1, height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center' } }
                  placeholder="请输入验证码"
                  placeholderTextColor="#ffffff"
                  underlineColorAndroid="transparent"
                  numberOfLines={ 1 }
                  ref="verifycode"
                  blurOnSubmit={ true }
                  onSubmitEditing={ (event) => {
                    verifycode = event.nativeEvent.text;
                    this.btnLoginClick();
                  } }
                  onChangeText={ (text) => {
                    verifycode = text;
                  } } />
              </View>
              <TouchableOpacity style={ { width: 100, height: 45, alignItems: 'center', justifyContent: 'center' } }>
                <Image source={ { width: 100, height: 38, uri: 'http://220.166.172.33/Account/GetValidateCode' } } />
              </TouchableOpacity>
              <TouchableOpacity style={ { height: 45, alignItems: 'center', justifyContent: 'center' } }>
                <Text numberOfLines={1} style={ {  color: '#ffffff', fontSize: 12, marginLeft: 2, } }>
                  见姐姐
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={ () => {
                this.btnLoginClick();
              } }
              style={ { justifyContent: 'center', marginTop: 40, alignItems: 'center' } }>
              <View style={ { backgroundColor: 'white', borderRadius: 32, width: 300, height: 40, justifyContent: 'center', alignItems: 'center' } }>
                <Text style={ { color: '#1aa2ed' } }>
                  登录
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item_layout: {
    backgroundColor: 'white',
    height: 48,
    justifyContent: 'center'
  },
  topbar_bg: {
    height: 48,
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  topbar_left_item: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topbar_center_bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topbar_center_tv: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  topbar_right_item: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topbar_right_tv: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  }
});
export default Login;
