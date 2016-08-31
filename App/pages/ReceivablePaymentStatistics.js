'use strict';
import React, { Component } from 'react';
import {     AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';
import * as AppTheme from '../theme';

const ReceivablePaymentStatisticsData = {
    "api": "GetStoreList",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": [{
        "id": 1,
        "kind": "学费",
        "serialNumber": "003975",
        "moneyShouldPay": '0.04',
        "moneyPayed": '0.01',
        'moneyMinus': '0.01',
        'moneyBack': '0.01',
        'moneyArrears': '0.01',
        sectionID: "2016年",
    }, {
            "id": 2,
            "kind": "住宿费",
            "serialNumber": "003975",
            "moneyShouldPay": '0.04',
            "moneyPayed": '0.01',
            'moneyMinus': '0.01',
            'moneyBack': '0.01',
            'moneyArrears': '0.01',
            sectionID: "2016年",
        }, {
            "id": 3,
            "kind": "恋爱经费",
            "serialNumber": "003975",
            "moneyShouldPay": '0.04',
            "moneyPayed": '0.01',
            'moneyMinus': '0.01',
            'moneyBack': '0.01',
            'moneyArrears': '0.01',
            sectionID: "2017年",
        }, {
            "id": 4,
            "kind": "房费",
            "serialNumber": "003975",
            "moneyShouldPay": '0.04',
            "moneyPayed": '0.01',
            'moneyMinus': '0.01',
            'moneyBack': '0.01',
            'moneyArrears': '0.01',
            sectionID: "2017年",
        }, {
            "id": 5,
            "kind": "礼物费",
            "serialNumber": "003975",
            "moneyShouldPay": '0.04',
            "moneyPayed": '0.01',
            'moneyMinus': '0.01',
            'moneyBack': '0.01',
            'moneyArrears': '0.01',
            sectionID: "2017年",
        }, {
            "id": 6,
            "kind": "学杂费",
            "serialNumber": "003975",
            "moneyShouldPay": '0.04',
            "moneyPayed": '0.01',
            'moneyMinus': '0.01',
            'moneyBack': '0.01',
            'moneyArrears': '0.01',
            sectionID: "2018年",
        },
        {
            "id": 7,
            "kind": "把妹飞",
            "serialNumber": "003975",
            "moneyShouldPay": '0.04',
            "moneyPayed": '0.01',
            'moneyMinus': '0.01',
            'moneyBack': '0.01',
            'moneyArrears': '0.01',
            sectionID: "2018年",
        }
    ]
};

class ReceivablePaymentStatistics extends Component {
    _getInitialState() {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        return {
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    }

    componentWillMount() {
        var res = this.listViewHandleData(ReceivablePaymentStatisticsData.data);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(res.dataBlob, res.sectionIDs, res.rowIDs),
            loaded: true
        });
    }
    /**
      * 数据处理
      */
    listViewHandleData(result) {
        var me = this,
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            key,
            //result = Util.sortResource(data),        //重新排序
            length = result.length,
            splitIdx;

        var sCount = -1;
        //将数据分隔成两段
        for (var i = 0; i < length; i++) {
            var item = result[i]
            var sectionID = item.sectionID;

            if (sectionIDs.indexOf(sectionID) != -1) {
                dataBlob[sectionID + ":" + i] = item;
                rowIDs[sCount].push(i);
            } else {
                //first i=0
                sCount++;
                var arr = [];
                arr.push(i);
                sectionIDs.push(sectionID);
                rowIDs.push(arr);
                //the right of the equal is the SectionData
                dataBlob[sectionID] = sectionID
                dataBlob[sectionID + ":" + i] = item;
            }
        }

        return {
            dataBlob: dataBlob,
            sectionIDs: sectionIDs,
            rowIDs: rowIDs
        }
    }

    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this.state = this._getInitialState();
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
                        <Text style={{ marginLeft: 10, marginTop:6,color: '#323232', fontSize: 15 }}>{rowData.kind}</Text>
                        <Text style={{ marginLeft: 10, marginTop:6,color: '#323232', fontSize: 11 }}>应缴费金额(元): {rowData.moneyShouldPay}</Text>
                        <Text style={{ marginLeft: 10, marginTop:6,color: '#323232', fontSize: 11 }}>已缴费金额(元): {rowData.moneyPayed}</Text>
                        <Text style={{ marginLeft: 10, marginTop:6,color: '#323232', fontSize: 11 }}>减免金额(元): {rowData.moneyMinus}</Text>
                        <Text style={{ marginLeft: 10, marginTop:6,color: '#323232', fontSize: 11 }}>退费金额(元): {rowData.moneyBack}</Text>
                        <Text style={{ marginLeft: 10,marginBottom:6, marginTop:6,color: '#323232', fontSize: 11 }}>欠费金额(元): {rowData.moneyArrears}</Text>
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

    render() {
        return (<View>
            <TitleBar title="应收款缴费统计表"/>
            <View style={{ flex: 1 }}>
                <ListView
                    initialListSize={1}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    style={{ backgroundColor: 'white', flex: 1 }}
                    enableEmptySections={true}
                    renderSectionHeader={this._renderSectionHeader}
                    renderSeparator={this._renderSeparatorView}
                    />
            </View>
        </View>);
    }
}
const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor:AppTheme.ThemeColor
    }
});
export default ReceivablePaymentStatistics;