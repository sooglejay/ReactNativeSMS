
'use strict';
import React, { Component } from 'react';
import {    InteractionManager, AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';
import {toastShort} from '../utils/ToastUtil';
import * as AppTheme from '../theme';
import {API_SERVER, HandShakeCode, bodyObj, RTN_CODE} from '../common/API.js';
import {key_XH} from'../common/Storage';

let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 } });


class FinishedOrderList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLeft: true,
            dataSource: ds.cloneWithRows([]),
            hasDatas: false,
        }
        this._renderRow = this._renderRow.bind(this);
        this._back = this._back.bind(this);
    }
    _back() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.pop();
        });
    }


    async foo() {
        var XH = '';
        try {
            XH = await AsyncStorage.getItem(key_XH);
            if (XH !== null) {
                // We have data!!
            }
        } catch (error) {
            // Error retrieving data
        } finally {
            await this._getPaymentDetailFromApiAsync(XH);
        }
    }

    async _getPaymentDetailFromApiAsync(xuehao) {
        return fetch(API_SERVER, bodyObj('TRAN_CODE=' + HandShakeCode.orderCompleted + '&XH=' + xuehao))
            .then((response) => {
                if (response.status == 200) {
                    return {
                        "DETAIL": [
                            { "SFND": "2015", "DDNR": "学费", "DDSJ": "2016-07-15", "DDJE": "1", "PJDH": "000001" },
                            { "SFND": "2015", "DDNR": "住宿费", "DDSJ": "2016-07-15", "DDJE": "1", "PJDH": "000001" },
                            { "SFND": "2015", "DDNR": "预收水电费", "DDSJ": "2016-07-15", "DDJE": "1", "PJDH": "000001" }
                        ],
                        "RTN_CODE": "00", "RTN_MSG": "有其缴费记录"
                    };

                    // return response.json();
                }
                else {
                    toastShort('系统错误！');
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then((responseJson) => {
                var sourceDatas = responseJson.DETAIL;
                this.setState({
                    dataSource: ds.cloneWithRows(sourceDatas),
                    hasDatas: sourceDatas && sourceDatas.length > 0
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentWillMount() {
        this.foo();
    }

    _renderHeader() {
        return (
            <View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: 'white'
                }}>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单号</Text>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单时间</Text>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单金额(元) </Text>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单内容</Text>
                </View>
                <View style={styles.separator}/>
            </View>);
    }
    //渲染每一项的数据
    _renderRow(rowData, sectionID, rowID) {
        let backgroundColor = rowID % 2 == 0 ? '#f5f5f5' : 'white';
        return (
            <View key={rowData.id}>
                <TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between', backgroundColor: backgroundColor,
                    }}>
                        <Text ellipsizeMode='middle' style={{ marginLeft: 10, marginTop: 10, marginBottom: 10, color: '#323232', fontSize: 10 }}>{rowData.PJDH}</Text>
                        <Text ellipsizeMode='middle' style={{ marginTop: 10, marginBottom: 10, color: '#323232', fontSize: 10 }}>{rowData.DDSJ}</Text>
                        <Text ellipsizeMode='middle' style={{ marginTop: 10, marginBottom: 10, color: '#323232', fontSize: 10 }}>{rowData.DDJE}</Text>
                        <Text ellipsizeMode='middle' style={{ marginTop: 10, marginBottom: 10, marginRight: 12, color: '#323232', fontSize: 10 }}>{rowData.DDNR}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.separator} />
        );
    }

    render() {
        return (<View>

            <TitleBar
                leftView={<Image   style={{ width: 22, height: 22 }} source={require('../imgs/arrow_left.png') }/> }
                title="已完成订单"
                onLeftClick = {this._back}
                />

            <View style={{ flex: 1 }}>
                <ListView
                    initialListSize={1}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    style={{ backgroundColor: 'white', flex: 1 }}
                    onEndReachedThreshold={10}
                    enableEmptySections={true}
                    renderHeader={this._renderHeader}
                    renderSeparator={this._renderSeparatorView}
                    />
            </View>
        </View>);
    }
};
let styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: AppTheme.SeparatorColor
    }
});
export default FinishedOrderList;