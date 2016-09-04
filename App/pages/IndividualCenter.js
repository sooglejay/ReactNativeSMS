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
        <Text style={{ backgroundColor: 'transparent', margin: 6, color: 'black', fontSize: 22, alignSelf: 'center' }} >刘连雨</Text>
    </Image>

const ContainerComponent = ({data}) => {
    let RXNF = data.RXNF + "年";
    return <ScrollView
        style={ { flex: 1 } }
        showsVerticalScrollIndicator={ false }>
        <View style={ { flex: 1 } }>
            <AvatarComponent/>
            <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
            <RowComponent titleKey="我的院系"  titleValue={data.YX} />
            <RowComponent titleKey="我的专业"  titleValue={data.ZY} />
            <RowComponent titleKey="我的班级"  titleValue={data.BJ} />
            <RowComponent titleKey="入学年度"  titleValue={RXNF}/>
            <RowComponent titleKey="我的学号"  titleValue={data.XH} />
            <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
            <RowComponent titleKey="我的民族"  titleValue={data.MZ}/>
            <RowComponent titleKey="身份证号"  titleValue={data.SFZ}/>
            <RowComponent titleKey="手机号码"  titleValue={data.SJ} />
            <RowComponent titleKey="家庭住址"  titleValue={data.ZZ} />
            <RowComponent titleKey="电子邮箱"  titleValue={data.EMAIL} />
            <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
            <RowComponent titleKey="开户银行"  titleValue="服务器后台没有对应字段" />
            <RowComponent titleKey="银行卡号"  titleValue={data.YHK}/>
            <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
        </View>
    </ScrollView>
}

export default class IndividualCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        }
    }
    render() {
        return (
            <View>
                <TitleBar isMainView={false}  title="个人中心" onLeftClick={() => { toastShort("you") } }/>
                <ContainerComponent data = {this.state.data}/>
            </View>

        );
    }
}