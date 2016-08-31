'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Dimensions, ListView,
    TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, InteractionManager, } from 'react-native';
import ShortLine from '../components/ShortLine';
import ShortColumn from '../components/ShortColumn';
import { toastShort } from '../utils/ToastUtil';
import TitleBar from '../components/TitleBar';
const RowComponent = (props) =>
    <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
        <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>{props.titleKey}</Text>
        <Text style={{ color: '#666666', fontSize: 12 }}>{props.titleValue}</Text>
    </TouchableOpacity>
const AvatarComponent = () =>
    <Image source={require('../imgs/icon_university.png') } style={{ height: 190, flex: 1, justifyContent: 'center' }} >
        <Image source={require('../imgs/icon_university.png') } style={{ height: 90, width: 90, alignSelf: 'center' }} />
        <Text style={{ fontSize: 15, color: 'white', margin: 6, alignSelf: 'center' }} >刘连雨</Text>
    </Image>

const ContainerComponent = () =>
    <ScrollView
        style={ { flex: 1 } }
        showsVerticalScrollIndicator={ false }>
        <View style={ { flex: 1 } }>
            <AvatarComponent/>
            <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
            <RowComponent titleKey="我的院系"  titleValue="建设与管理工程学院" />
            <RowComponent titleKey="我的班级"  titleValue="工业工程15-2" />
            <RowComponent titleKey="入学年度"  titleValue="2015年" />
            <RowComponent titleKey="我的学号"  titleValue="201522190307" />
            <RowComponent titleKey="我的院系"  titleValue="建设与管理工程学院" />
            <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
            <RowComponent titleKey="我的民族"  titleValue="汉" />
            <RowComponent titleKey="身份证号"  titleValue="XXXXXXX-2" />
            <RowComponent titleKey="手机号码"  titleValue="XXXXXXXX" />
            <RowComponent titleKey="家庭住址"  titleValue="XXXXXXXX" />
            <RowComponent titleKey="电子邮箱"  titleValue="3940555@qq.com" />
            <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
            <RowComponent titleKey="开户银行"  titleValue="XXXXX" />
            <RowComponent titleKey="银行卡号"  titleValue="XXXXXXX" />
        </View>
    </ScrollView>

export default class IndividualCenter extends Component {
    render() {
        return (
            <View>
                <TitleBar isMainView={false}  title="个人中心" onLeftClick={() => { toastShort("you") } }/>
                <ContainerComponent/>
            </View>

        );
    }
}