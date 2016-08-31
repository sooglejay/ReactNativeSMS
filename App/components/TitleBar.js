'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import * as AppTheme from '../theme';
const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 10 : 0);
const CommonStyle = StyleSheet.create({
    topbar_bg: {
        height: 48,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: AppTheme.ThemeColor,
        flexDirection: 'row'
    },
    topbar_left_item: {
        width: 48,
        marginLeft: 10,
        height: 48,
        alignItems: 'flex-start',
        justifyContent: 'center'

    },

    topbar_center_item: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    topbar_center_tv: {
        fontSize: 18,
        color: 'white',
    },

    topbar_right_item: {
        width: 48,
        marginRight: 10,
        height: 48,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    topbar_right_tv: {

        fontSize: 15,
        color: 'white',
    }
});
const TitleBar = ({isMainView, title, onLeftClick, onRightClick}) => {
    let statusBar = STATUS_BAR_HEIGHT == 0 ? <View></View> : <View style={{ backgroundColor: AppTheme.ThemeColor, height: STATUS_BAR_HEIGHT }}></View>;

    let leftImage = isMainView ?
        <Image
            style={{ width: 22, height: 22 }}
            source={require('../imgs/icon_university.png') }
            /> :
        <Image
            style={{ width: 22, height: 22 }}
            source={require('../imgs/arrow_left.png') }
            />
    let leftView =
        <TouchableOpacity onPress={() => onLeftClick() }
            style={CommonStyle.topbar_left_item}>
            {leftImage}
        </TouchableOpacity>;

    let centerView =
        <View style={CommonStyle.topbar_center_item}>
            <Text style={CommonStyle.topbar_center_tv}>{title}</Text>
        </View>

    let rightView = isMainView ?
        <TouchableOpacity onPress={() => onRightClick() }
            style={CommonStyle.topbar_right_item}>
            <Image
                style={{ width: 22, height: 22 }}
                source={require('../imgs/icon_power.png') }
                />
        </TouchableOpacity> : <View style={CommonStyle.topbar_right_item}/>;

    return (<View>
        {statusBar}
        <View style={CommonStyle.topbar_bg}>
            {leftView}
            {centerView}
            {rightView}
        </View>
    </View>);
}

export default TitleBar;