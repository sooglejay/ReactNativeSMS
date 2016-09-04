/**
 * 商城主框架界面
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, View, Text, Image, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Index from './Index';
import SystemNotification from './SystemNotification';
import IndividualCenter from './IndividualCenter';
import {API_SERVER, HandShakeCode, bodyObj, RTN_CODE} from '../common/API.js';
import {key_XH} from'../common/Storage';

export default class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Index',

      hasSystemNotification: false,
      systemNotificationData: [],
      individualCenterData: {},
      paymentSummaryReceivableData: {},
      paymentSummaryOtherData: {},

    };
  }


  async foo() {
    var XH = '';
    try {
      XH = await AsyncStorage.getItem(key_XH);
      if (XH !== null) {
        // We have data!!
      }
    } catch (error) {
      // Error retrieving data
    } finally {
      //获取系统通知
      await this._getSystemNotificationFromApiAsync(XH);
      await this._getIndividualCenterFromApiAsync(XH);
    }
  }

  async _getSystemNotificationFromApiAsync(xuehao) {
    return fetch(API_SERVER, bodyObj('TRAN_CODE=' + HandShakeCode.systemNotification + '&XH=' + xuehao))
      .then((response) => {
        if (response.status == 200) {
          // return {"DETAIL":[{"MONEY":"4799","TIME":"2015","TYPE":"学费"},{"MONEY":"1199","TIME":"2015","TYPE":"住宿费"},{"MONEY":"99","TIME":"2015","TYPE":"预收水电费"}],"RTN_CODE":"00","RTN_MSG":"有欠费记录"};
          return response.json();
        }
        else {
          toastShort('系统错误！');
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((responseJson) => {
        console.log(" 系统通知 网络请求h:121:" + JSON.stringify(responseJson));

        if (responseJson.RTN_CODE == RTN_CODE.RTN_CODE_01) {
          // console.log("rigou ----hhhhhhh:121:" + JSON.stringify(responseJson));
          // console.log("rigou ---qwq:" + responseJson.RTN_CODE);
          // 00 成功  01 无欠费记录
          this.setState(() => {
            return Object.assign({}, this.state, {
              hasSystemNotification: false,
              systemNotificationData: responseJson.DETAIL,
            });
          });
        } else {
          this.setState(() => {
            return Object.assign({}, this.state, {
              hasSystemNotification: true,
              systemNotificationData: responseJson.DETAIL,
            });
          });

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async _getIndividualCenterFromApiAsync(xuehao) {
    return fetch(API_SERVER, bodyObj('TRAN_CODE=' + HandShakeCode.individualCenter + '&XH=' + xuehao))
      .then((response) => {
        if (response.status == 200) {
          // return {"BJ":"机电13(3)-1","EMAIL":"","MZ":"","RXNF":"2015","SFZ":"510602199408067003","SJ":"","XH":"3320130193126","XM":"邹明珂","YHK":"","YX":"机械工程学院","ZY":"机械工程与自动化学院","ZZ":""}}; 
          return response.json();
        }
        else {
          toastShort('系统错误！');
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((responseJson) => {
        console.log(" 个人忠心 网络请求h:121:" + JSON.stringify(responseJson));
        this.setState(() => {
          return Object.assign({}, this.state, {
            individualCenterData: responseJson,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }



  componentDidMount() {
    this.foo();
  }


  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="首页"
          selected={ this.state.selectedTab === 'Index' }
          selectedTitleStyle={ styles.selectedTextStyle }
          titleStyle={ styles.textStyle }
          renderIcon={ () => <Image
            source={ require("../imgs/index/icon_index_page_default.png") }
            style={ styles.iconStyle } /> }
          renderSelectedIcon={ () => <Image
            source={ require("../imgs/index/icon_index_page_selected.png") }
            style={ styles.iconStyle } /> }
          onPress={ () => this.setState({
            selectedTab: 'Index'
          }) }>
          <Index {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="系统通知"
          badgeText="9"
          selected={ this.state.selectedTab === 'SystemNotification' }
          selectedTitleStyle={ styles.selectedTextStyle }
          titleStyle={ styles.textStyle }
          renderIcon={ () => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={ require("../imgs/system_notification/icon_system_notification_page_default.png") }
                  style={{ width: 30, height: 30 }}/>
              </View>
            );

          } }
          renderSelectedIcon={ () => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={ require("../imgs/system_notification/icon_system_notification_page_selected.png") }
                  style={ styles.iconStyle } />
              </View>);
          } }
          onPress={ () => this.setState({
            selectedTab: 'SystemNotification'
          }) }>
          <SystemNotification {...this.props} data={this.state.systemNotificationData} hasSystemNotification={this.state.hasSystemNotification}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="个人中心"
          selected={ this.state.selectedTab === 'IndividualCenter' }
          selectedTitleStyle={ styles.selectedTextStyle }
          titleStyle={ styles.textStyle }
          renderIcon={ () => <Image
            source={ require("../imgs/individual_center/icon_individual_center_page_default.png") }
            style={ styles.iconStyle } /> }
          renderSelectedIcon={ () => <Image
            source={ require("../imgs/individual_center/icon_individual_center_page_selected.png") }
            style={ styles.iconStyle } /> }
          onPress={ () => this.setState({
            selectedTab: 'IndividualCenter'
          }) }>
          <IndividualCenter {...this.props} data={this.state.individualCenterData}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
const styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 30,
  },
  textStyle: {
    color: '#999',
  },
  selectedTextStyle: {
    color: 'black',
  }
});
