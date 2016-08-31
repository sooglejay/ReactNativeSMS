'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Dimensions, ListView,
    TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, InteractionManager, } from 'react-native';
import ShortLine from '../components/ShortLine';
import ShortColumn from '../components/ShortColumn';
import { toastShort } from '../utils/ToastUtil';
import Button from 'react-native-smart-button'
import TitleBar from '../components/TitleBar';
import * as AppTheme from '../theme';

const STORE_DATA = {
    "api": "GetStoreList",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": [{
        "id": 1,
        "name": "学费",
        "year": 2017,
        "money": '11.00',
    }, {
            "id": 2,
            "name": "学费",
            "year": 2017,
            "money": '11.00',
        }, {
            "id": 3,
            "name": "学费",
            "year": 2017,
            "money": '11.00',
        }, {
            "id": 4,
            "name": "学费",
            "year": 2017,
            "money": '11.00',
        }, {
            "id": 5,
            "name": "学费",
            "year": 2017,
            "money": '11.00',
        }
    ]
};


export default class SystemNotificationPage extends Component {
    constructor(props) {
        super(props);
        this._onPressItem = this._onPressItem.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            storeLists: STORE_DATA.data,
        }
    }
    //进行渲染数据
    renderContent(dataSource) {
        return (
            <ListView
                initialListSize={1}
                dataSource={dataSource}
                renderRow={this.renderItem}
                style={{ backgroundColor: 'white', flex: 1 }}
                onEndReachedThreshold={10}
                enableEmptySections={true}
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
                renderSeparator={this._renderSeparatorView}
                />
        );
    }
    //渲染每一项的数据
    renderItem(data) {
        let backgroundColor = data.id % 2 !== 0 ? '#f5f5f5' : 'white';
        return (
            <View key={data.id}>
                <TouchableOpacity onPress={() => { toastShort("you ") } }>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between', backgroundColor: backgroundColor,
                    }}>
                        <Text style={{ margin: 12, marginLeft: 20, color: '#323232', fontSize: 15 }}>{data.money}</Text>
                        <Text style={{ margin: 12, marginRight: 20, color: '#323232', fontSize: 15 }}>{data.money}</Text>
                        <Text style={{ margin: 12, marginRight: 20, color: '#323232', fontSize: 15 }}>{data.money}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    /**
 * Render a separator between rows
 */
    _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.separator} />
        );
    }

    _onPressItem(item) {
        toastShort(item.name);
    }
    _renderHeader() {
        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: '#f5f5f5', justifyContent: 'flex-start' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                        <Image source={require('../imgs/icon_power.png') } style={{ width: 16, height: 16, marginRight: 6 }}/>
                        <Text style={{ color: '#1ba0ec', fontSize: 15 }}>
                            您有未完成的订单，请及时支付
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.separator}>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: 'white'
                }}>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>收费区间</Text>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>收费项目</Text>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>缴费金额(元) </Text>
                </View>
                <View style={styles.separator}/>
            </View>);
    }
    _renderFooter() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button
                        touchableType={'highlight'}
                        underlayColor={'#f0f0f0f0'}
                        style={{ flex: 1, margin: 10, height: 40, backgroundColor: 'white', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: '#d5d5d5', justifyContent: 'center', }}
                        textStyle={{ fontSize: 15, color: '#333333' }}
                        >
                        <Image source={require('../imgs/icon_delete.png') } style={{ width: 24, height: 24, marginRight: 3, }}/>
                        删除
                    </Button>
                    <Button
                        touchableType={'highlight'}
                        underlayColor={'#f0f0f0f0'}
                        style={{ flex: 1, margin: 10, height: 40, backgroundColor: 'white', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: '#d5d5d5', justifyContent: 'center', }}
                        textStyle={{ fontSize: 15, color: '#333333' }}
                        >
                        <Image source={require('../imgs/icon_delete.png') } style={{ width: 24, height: 24, marginRight: 3, }}/>
                        支付
                    </Button>
                </View>
                <View style={{ height: 12, backgroundColor: '#f5f5f5' }}></View>
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{ color: '#666666', marginLeft: 12, marginTop: 12, fontSize: 13 }}>订单号: 2016070400002</Text>
                    <Text style={{ color: '#666666', marginLeft: 12, marginTop: 12, fontSize: 13 }}>订单时间: 2016-07-04 11: 55: 14</Text>
                    <Text style={{ color: '#666666', marginLeft: 12, marginTop: 12, fontSize: 13, marginBottom: 12 }}>订单金额: 122.00元</Text>
                </View>


            </View>);
    }

    render() {
        return (
            <View>
                <TitleBar isMainView={false}  title="系统通知" onLeftClick={() => { toastShort("left") } } onRightClick={() => { toastShort("right") } }/>
                <View style={{ flex: 1 }}>
                    {this.renderContent(this.state.dataSource.cloneWithRows(
                        this.state.storeLists === undefined ? [] : this.state.storeLists)) }
                </View>
            </View>

        );
    }
}

let styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: AppTheme.SeparatorColor
    }
});