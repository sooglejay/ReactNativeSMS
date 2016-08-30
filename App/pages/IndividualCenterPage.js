'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Dimensions, ListView,
    TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, InteractionManager, } from 'react-native';
import ShortLine from '../components/ShortLine';
import ShortColumn from '../components/ShortColumn';
import { toastShort } from '../utils/ToastUtil';
import CommonStyle from '../styles';
const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 10 : 0);

const RowComponent = (props) => 
    <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
        <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>{props.key}</Text>
        <Text style={{ color: '#666666', fontSize: 12 }}>{props.value}</Text>
    </TouchableOpacity>

export default class IndividualCenterPage extends Component {
    render() {
        return (
            <View>
                <View style={{ backgroundColor: '#2bb4f7', height: STATUS_BAR_HEIGHT }}></View>
                <View style={CommonStyle.topbar_bg}>
                    <TouchableOpacity onPress={() => { } }
                        style={CommonStyle.topbar_left_item}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={require('../imgs/arrow_left.png') }
                            />
                    </TouchableOpacity>
                    <View style={CommonStyle.topbar_center_bg}>
                        <Text style={CommonStyle.topbar_center_tv}>个人中心</Text>
                    </View>
                    <TouchableOpacity onPress={() => { } }
                        style={CommonStyle.topbar_right_item}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={require('../imgs/icon_power.png') }
                            />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={ { flex: 1 } }
                    showsVerticalScrollIndicator={ false }>
                    <View
                        style={ { flex: 1 } }>

                        <Image source={require('../imgs/icon_university.png') } style={{ height: 190, flex: 1, justifyContent: 'center' }} >
                            <Image source={require('../imgs/icon_university.png') } style={{ height: 90, width: 90, alignSelf: 'center' }} />
                            <Text style={{ fontSize: 15, color: 'white', margin: 6, alignSelf: 'center' }} >刘连雨</Text>
                        </Image>

                        <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>

<RowComponent key="我的院系" value="建设与管理工程学院" />
                        


                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>我的专业</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>建设与管理工程学院</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>我的班级</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>工业工程15-2</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>入学年度</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>2015年</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>我的学号</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>201522190307</Text>
                        </TouchableOpacity>




                        <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>

                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>我的民族</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>汉</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>身份证号</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>XXXXXXX</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>手机号码</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>XXXXXXXX</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>家庭住址</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>XXXXXXXX</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>电子邮箱</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>3940555 @qq.com</Text>
                        </TouchableOpacity>



                        <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>

                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>开户银行</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>XXXXX</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ color: '#666666', fontSize: 12, flex: 1, alignSelf: 'flex-start' }}>银行卡号</Text>
                            <Text style={{ color: '#666666', fontSize: 12 }}>XXXXXXX</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>

        );
    }
}