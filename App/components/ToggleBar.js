'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import ThemeColor from '../theme';

const ToggleBar = ({leftTitle, rightTitle, onLeftClick, onRightClick}) => <View style={{ backgroundColor: '#f5f5f5', flexDirection: 'row', justifyContent: 'center', }}>
    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', borderColor: ThemeColor, borderRadius: 4, borderWidth: 1, margin: 10, }}>
        <TouchableOpacity onPress = {()=>onLeftClick()} style={{ alignItems: 'center', flex: 1, backgroundColor: ThemeColor, padding: 10 }}>
            <Text style={{ color: 'white' }}>{leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress = {()=>onRightClick()} style={{ alignItems: 'center', flex: 1, backgroundColor: 'white', padding: 10 }}>
            <Text style={{ alignItems: 'center', color: '#666666' }}>{rightTitle}</Text>
        </TouchableOpacity>
    </View>
</View>
export default ToggleBar;