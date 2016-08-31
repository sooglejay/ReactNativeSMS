'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import * as AppTheme from '../theme';
var ThemeColor = AppTheme.ThemeColor;

const ToggleBar = ({selectedLeft, leftTitle, rightTitle, onLeftClick, onRightClick}) => <View style={{ backgroundColor: '#f5f5f5', flexDirection: 'row', justifyContent: 'center', }}>
    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', borderColor: ThemeColor, borderRadius: 4, borderWidth: 1, margin: 10, }}>
        <TouchableOpacity onPress = {() => onLeftClick() } style={{ alignItems: 'center', flex: 1, backgroundColor: selectedLeft ? ThemeColor : 'white', padding: 10 }}>
            <Text style={{ color:selectedLeft?'white': '#666666' }}>{leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress = {() => onRightClick() } style={{ alignItems: 'center', flex: 1, backgroundColor: selectedLeft ? 'white' : ThemeColor, padding: 10 }}>
            <Text style={{ alignItems: 'center', color: selectedLeft?'#666666':'white' }}>{rightTitle}</Text>
        </TouchableOpacity>
    </View>
</View>
export default ToggleBar;