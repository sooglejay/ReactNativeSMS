'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Dimensions, ListView,
    TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, InteractionManager, } from 'react-native';
import ShortLine from '../components/ShortLine';
import ShortColumn from '../components/ShortColumn';
import { toastShort } from '../utils/ToastUtil';
import TitleBar from '../components/TitleBar';
const { BlurView, VibrancyView } = require('react-native-blur');

const RowComponent = (props) =>
    <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
        <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>{props.titleKey}</Text>
        <Text style={{ color: '#666666', fontSize: 12 }}>{props.titleValue}</Text>
    </TouchableOpacity>
const AvatarComponent = () =>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Image source={ require('../imgs/icon_avatar.jpg') } style={{ flex: 1, height: 300, justifyContent: 'center' }}>
            <BlurView blurType="light" style={styles.container}>
                <Image source={ require('../imgs/icon_avatar.jpg') } style={{ borderRadius: 60, alignSelf: 'center', width: 120, height: 120 }}/>
                <Text style={{ alignSelf: 'center', marginTop: 12, fontSize: 20, color: '#222' }}>刘连雨</Text>
            </BlurView>
        </Image>
    </View>

const ContainerComponent = ({data}) => {
    let RXNF = data.RXNF + "年";
    return <View style={ { flex: 1 } }>
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
            <View style={ { flex: 1 } }>
                <TitleBar
                    title="个人中心"
                    />
                <ScrollView
                    style={ { flex: 1 } }
                    showsVerticalScrollIndicator={ false }>
                    <View style={ { flex: 1 } }>
                        <ContainerComponent data = {this.state.data}/>
                    </View>
                </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
    },
});

