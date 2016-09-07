'use strict';
import React, { Component, PropTypes } from "react";
import { View, AsyncStorage, Text, ScrollView, BackAndroid, TouchableOpacity, Image, StyleSheet, InteractionManager, TextInput, Platform, ToastAndroid, NativeModules } from "react-native";
import ShortLineTwo from '../components/ShortLineTwo';
import { toastShort } from '../utils/ToastUtil';
import {API_SERVER, HandShakeCode, bodyObj} from '../common/API.js';
import {key_isLogined, value_isLogined, key_XH} from'../common/Storage';

import AppWrapper from './AppWrapper';
var EncryptionModule = NativeModules.EncryptionModule;


var username = '';
var password = '';
var verifycode = '';



class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLoginClick = this.btnLoginClick.bind(this);
    this.loginRequestFromApiAsync = this.loginRequestFromApiAsync.bind(this);
  }
  componentDidMount() {
    // loginRequestFromApiAsync();
  }
  async foo(responseJson) {
    toastShort(responseJson.RTN_MESSAGE);
    try {
      await AsyncStorage.setItem(key_isLogined, value_isLogined);
      await AsyncStorage.setItem(key_XH, username);
    } catch (error) {
      // Error saving data
    } finally {
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: AppWrapper,
          title: '首页',
        });
      });
    }
  }
  loginRequestFromApiAsync() {
    return fetch(API_SERVER, bodyObj('TRAN_CODE=' + HandShakeCode.login + '&XH=' + username + '&MM=' + password))
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        else {
          toastShort('系统错误！');
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((responseJson) => {
        this.foo(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  btnLoginClick() {
    toastShort("正在登录... ");
    this.loginRequestFromApiAsync();
  }
  render() {
    return (
      <View style={ { backgroundColor: '#2bb4f7', flex: 1 } }>
        <ScrollView contentContainerStyle={{ flex: 1 }}
          keyboardDismissMode='on-drag' //拖动界面输入法退出
          keyboardShouldPersistTaps={false} //点击输入法意外的区域，输入法退出
          >
          <View>
            <Image
              source={ require('../imgs/icon_university.png') }
              style={ { marginTop: 60, width: 130, height: 130, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' } } />
            <Text style={ { color: 'white', fontSize: 18, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 40 } }>
              学生缴费服务平台
            </Text>
            <View style={ { flexDirection: 'row', backgroundColor: '#72cdf7', margin: 12, borderRadius: 9, height: 45, alignItems: 'center' } }>
              <Image
                source={ require('../imgs/login/icon_user.png') }
                style={ { width: 30, height: 30, marginLeft: 12 } } />
              <TextInput
                style={ { paddingLeft: 14, height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center', flex: 1 } }
                placeholder="请输入学号"
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
            <View style={ { flexDirection: 'row', backgroundColor: '#72cdf7', margin: 12, borderRadius: 9, height: 45, alignItems: 'center' } }>
              <Image
                source={ require('../imgs/login/icon_password.png') }
                style={ { width: 30, height: 30, marginLeft: 12 } } />
              <TextInput
                style={ { paddingLeft: 14, height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center', flex: 1 } }
                placeholder="请输入密码"
                placeholderTextColor="#ffffffff"
                underlineColorAndroid="transparent"
                numberOfLines={ 1 }
                ref="password"
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
                  source={ require('../imgs/login/icon_clear.png') }
                  style={ { width: 30, height: 30, marginLeft: 12 } } />
              </TouchableOpacity>
            </View>
            <View style={ { flexDirection: 'row', marginLeft: 12, marginRight: 12, marginBottom: 12, alignItems: 'center' } }>
              <View style={ { flex: 2, marginRight: 6, flexDirection: 'row', backgroundColor: '#72cdf7', borderRadius: 9, height: 45, alignItems: 'center' } }>
                <Image
                  source={ require('../imgs/login/icon_tag.png') }
                  style={ { width: 30, height: 30, marginLeft: 12 } } />
                <TextInput
                  style={ { paddingLeft: 14, flex: 1, height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center' } }
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
                <Image source={{ uri: 'http://220.166.172.33/Account/GetValidateCode' }}
                  style={{ width: 100, height: 40 }} />
              </TouchableOpacity>
              <TouchableOpacity style={ { height: 45, alignItems: 'center', justifyContent: 'center' } }>
                <Text numberOfLines={1} style={ { color: '#ffffff', fontSize: 12, marginLeft: 2, } }>
                  看不见？
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={ () => {
                this.btnLoginClick();
              } }
              style={ { justifyContent: 'center', marginTop: 40, alignItems: 'center' } }>
              <View style={ { backgroundColor: 'white', borderRadius: 32, width: 300, height: 40,marginBottom:30, justifyContent: 'center', alignItems: 'center' } }>
                <Text style={ { color: '#1aa2ed' } }>
                  登录
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView >
      </View >
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
