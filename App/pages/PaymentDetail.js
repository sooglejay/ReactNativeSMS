'use strict';
import React, { Component } from 'react';
import {  InteractionManager, AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';
import * as AppTheme from '../theme';
import {API_SERVER, HandShakeCode, bodyObj, RTN_CODE} from '../common/API.js';
import {key_XH} from'../common/Storage';

class PaymentDetail extends Component {
    _getInitialState() {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        return {
            hasDatas:false,
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
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
        return fetch(API_SERVER, bodyObj('TRAN_CODE=' + HandShakeCode.paymentDetail + '&XH=' + xuehao))
            .then((response) => {
                if (response.status == 200) {
                    return {
                        "DETAIL": {},

                        "RTN_CODE": "00", "RTN_MSG": "有其缴费项"
                    };

                    // return response.json();
                }
                else {
                    toastShort('系统错误！');
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then((responseJson) => {
                var datas = {},
                    sectionIDs = [],
                    rowIDs = [];
                var sCount = 0;
                var sourceDatas = responseJson.DETAIL;
                for (var i in sourceDatas) {
                    sectionIDs.push(i);
                    var arr = [];
                    rowIDs.push(arr);
                    datas[i] = i;
                    for (var j = 0; j < sourceDatas[i].length; j++) {
                        datas[i + ":" + j] = sourceDatas[i][j];
                        rowIDs[sCount].push(j);
                    }
                    sCount++;

                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(datas, sectionIDs, rowIDs),
                    loaded: true,
                    hasDatas:sCount>0
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentWillMount() {
        this.foo();
    }

    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this._back = this._back.bind(this);
        this.state = this._getInitialState();
    }
    _back() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.pop();
        });
    }
    _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.separator} />
        );
    }

    //渲染每一项的数据
    _renderRow(rowData, sectionID, rowID) {
        return (
            <View key={rowID}>
                <TouchableOpacity>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                    }}>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 15 }}>{rowData.TYPE}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>单据编号: {rowData.PJDH}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>单据金额(元): {rowData.JE}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>结算方式: {rowData.JSFS}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>单据日期: {rowData.JSRQ}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={{ backgroundColor: '#f5f5f5', padding: 10 }}>
                <Text style={{ fontSize: 18 }}>{sectionData}</Text>
            </View>
        )
    }

    renderContent() {
        if (this.state.hasDatas == true) {
            return <ListView
                initialListSize={1}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                style={{ backgroundColor: 'white', flex: 1 }}
                enableEmptySections={true}
                renderSectionHeader={this._renderSectionHeader}
                renderSeparator={this._renderSeparatorView}
                />
        } else {
            return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ flex: 1, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', color: '#1ba0ec', fontSize: 15 }}>
                        暂无缴费记录
                    </Text>
                </TouchableOpacity>
            </View>;
        }
    }
    render() {
        return (<View style={{
                flex: 1
            }}>
            <TitleBar onLeftClick={this._back} title="缴费明细表"/>
            <View style={{ flex: 1 }}>
                {this.renderContent() }
            </View>
        </View>);
    }
}
const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: AppTheme.SeparatorColor
    }
});
export default PaymentDetail;