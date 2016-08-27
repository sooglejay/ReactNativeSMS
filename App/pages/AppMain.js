'use strict';
import React, { Component, PropTypes } from "react";
import { View, Text, ScrollView, BackAndroid, TouchableOpacity, Image, StyleSheet, InteractionManager, TextInput, Platform, ToastAndroid, NativeModules } from "react-native";
import TextField from 'react-native-md-textinput';
import ShortLineTwo from '../components/ShortLineTwo';

var EncryptionModule = NativeModules.EncryptionModule;


var username = '';
var password = '';
var verifycode = '';

class Login extends Component {
  constructor(props) {
    super(props);
    this.buttonBackAction = this.buttonBackAction.bind(this);
    this.buttonRegisterOrLoginAction = this.buttonRegisterOrLoginAction.bind(this);
    this.buttonChangeState = this.buttonChangeState.bind(this);
    this.thirdPartLoginAction = this.thirdPartLoginAction.bind(this);
  }
  //返回
  buttonBackAction() {
    const {navigator} = this.props;
    return NaviGoBack(navigator);
  }
  //用户登录/注册
  buttonRegisterOrLoginAction(position) {}
  buttonChangeState() {}
  thirdPartLoginAction(position) {}

  render() {
    return (
      <View style={ { backgroundColor: '#2bb4f7', flex: 1 } }>
        <ScrollView>
          <View>
            <Image
                   source={ require('../imgs/icon_university.png') }
                   style={ { marginTop: 60, width: 80, height: 80, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' } } />
            <Text style={ { fontSize: 18, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 40 } }>
              学生缴费服务平台
            </Text>
            <View style={ { flexDirection: 'row', backgroundColor: '#72cdf7', margin: 12, borderRadius: 9, height: 45, alignItems: 'center' } }>
              <Image
                     source={ require('../imgs/logre/ic_us_icon.png') }
                     style={ { width: 17, height: 14, marginLeft: 13 } } />
              <TextInput
                         style={ { height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center', flex: 1 } }
                         placeholder="请输入用户名"
                         placeholderTextColor="#ffffffff"
                         underlineColorAndroid="transparent"
                         numberOfLines={ 1 }
                         ref={ 'username' }
                         multiline={ true }
                         autoFocus={ true }
                         onChangeText={ (text) => {
                                          username = text;
                                        } } />
            </View>
            <View style={ { flexDirection: 'row', backgroundColor: '#72cdf7', marginLeft: 12, marinRight: 12, marginBottom: 12, borderRadius: 9, height: 45, alignItems: 'center' } }>
              <Image
                     source={ require('../imgs/logre/ic_pwd_icon.png') }
                     style={ { width: 17, height: 14, marginLeft: 13 } } />
              <TextInput
                         style={ { height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center', flex: 1 } }
                         placeholder="请输入密码"
                         placeholderTextColor="#ffffff"
                         underlineColorAndroid="transparent"
                         numberOfLines={ 1 }
                         ref={ 'password' }
                         multiline={ true }
                         secureTextEntry={ true }
                         onChangeText={ (text) => {
                                          password = text;
                                        } } />
              <TouchableOpacity
                                onPress={ () => {
                                            this.buttonChangeState()
                                          } }
                                style={ { width: 45, height: 45, alignItems: 'center', justifyContent: 'center' } }>
                <Image
                       source={ require('../imgs/logre/ic_pwd_off.png') }
                       style={ { width: 17, height: 14, marginLeft: 13 } } />
              </TouchableOpacity>
            </View>
            <View style={ { flexDirection: 'row', backgroundColor: '#72cdf7', marginLeft: 12, marginRight: 12, borderRadius: 9, height: 45, alignItems: 'center' } }>
              <Image
                     source={ require('../imgs/logre/ic_pwd_icon.png') }
                     style={ { width: 17, height: 14, marginLeft: 13 } } />
              <TextInput
                         style={ { height: 40, fontSize: 15, textAlign: 'left', textAlignVertical: 'center', flex: 2.5 } }
                         placeholder="请输入验证码"
                         placeholderTextColor="#ffffff"
                         underlineColorAndroid="transparent"
                         numberOfLines={ 1 }
                         ref={ 'verifycode' }
                         multiline={ true }
                         secureTextEntry={ true }
                         onChangeText={ (text) => {
                                          verifycode = text;
                                        } } />
              <Image
                     source={ require('../imgs/logre/ic_pwd_icon.png') }
                     style={ { flex: 1, width: 17, height: 14, marginLeft: 13 } } />
              <TouchableOpacity
                                onPress={ () => {
                                            this.buttonChangeState()
                                          } }
                                style={ { width: 45, height: 45, alignItems: 'center', justifyContent: 'center' } }>
                <Text style={ { numberOfLines: 1 } }>
                  看不清
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
                              onPress={ () => {
                                          this.buttonRegisterOrLoginAction(0)
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
