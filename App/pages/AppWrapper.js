/**
 * 商城主框架界面
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Index from './Index';
import SystemNotification from './SystemNotification';
import IndividualCenter from './IndividualCenter';
import Badge from 'react-native-smart-badge'

export default class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Index'
    };
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
          <SystemNotification {...this.props}/>
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
          <IndividualCenter {...this.props}/>
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
