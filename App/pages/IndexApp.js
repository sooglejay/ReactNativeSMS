/**
 * 商城主框架界面
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import IndexPage from './IndexPage';
import SystemNotificationPage from './SystemNotificationPage';
import IndividualCenterPage from './IndividualCenterPage';
import Badge from 'react-native-smart-badge'

class AppMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'IndexPage'
    };
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
					title="首页"
					selected={ this.state.selectedTab === 'IndexPage' }
					selectedTitleStyle={ styles.selectedTextStyle }
					titleStyle={ styles.textStyle }
					renderIcon={ () => <Image
						source={ require("../imgs/index/icon_index_page_default.png") }
						style={ styles.iconStyle } /> }
					renderSelectedIcon={ () => <Image
						source={ require("../imgs/index/icon_index_page_selected.png") }
						style={ styles.iconStyle } /> }
					onPress={ () => this.setState({
						selectedTab: 'IndexPage'
					}) }>
          <IndexPage {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
					title="系统通知"
					selected={ this.state.selectedTab === 'SystemNotificationPage' }
					selectedTitleStyle={ styles.selectedTextStyle }
					titleStyle={ styles.textStyle }
					renderIcon={ () => {
						return (
							<View style={{ flexDirection: 'row' }}>
								<Image
									source={ require("../imgs/system_notification/icon_system_notification_page_default.png") }
									style={{ width: 32, height: 32 }}/>
								<Badge
									style={{ position: 'absolute', backgroundColor: '#ff0000', left:18 , }}
									textStyle={{ color: '#ffffff', fontSize: 12, }}>
									99+
								</Badge>
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
						selectedTab: 'SystemNotificationPage'
					}) }>
          <SystemNotificationPage {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
					title="个人中心"
					selected={ this.state.selectedTab === 'IndividualCenterPage' }
					selectedTitleStyle={ styles.selectedTextStyle }
					titleStyle={ styles.textStyle }
					renderIcon={ () => <Image
						source={ require("../imgs/individual_center/icon_individual_center_page_default.png") }
						style={ styles.iconStyle } /> }
					renderSelectedIcon={ () => <Image
						source={ require("../imgs/individual_center/icon_individual_center_page_selected.png") }
						style={ styles.iconStyle } /> }
					onPress={ () => this.setState({
						selectedTab: 'IndividualCenterPage'
					}) }>
          <IndividualCenterPage {...this.props}/>
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
export default AppMain;