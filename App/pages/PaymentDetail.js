'use strict';
import React, { Component } from 'react';
import {  InteractionManager, AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';
import * as AppTheme from '../theme';

const PaymentDetailData = {
    "api": "GetStoreList",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": [{
        "id": 1,
        "kind": "学费",
        "serialNumber": "003975",
        "money": '0.04',
        sectionID: "2016年",
        "method": "网上支付",
        "date": "2016-05-28",
    }, {
            "id": 2,
            "kind": "住宿费",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            sectionID: "2016年",
            "date": "2016-05-29",
        }, {
            "id": 3,
            "kind": "恋爱经费",
            "serialNumber": "003975",
            "money": '0.04',
            sectionID: "2017年",
            "method": "网上支付",
            "date": "2016-05-30",
        }, {
            "id": 4,
            "kind": "房费",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            "date": "2016-05-31",
            sectionID: "2017年",
        }, {
            "id": 5,
            "kind": "礼物费",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            "date": "2016-06-1",
            sectionID: "2017年",
        }, {
            "id": 6,
            "kind": "学杂费",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            "date": "2018-06-1",
            sectionID: "2018年",
        },
        {
            "id": 7,
            "kind": "把妹飞",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            "date": "2018-06-2",
            sectionID: "2018年",
        }
    ]
};


class PaymentDetail extends Component {
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
        var res = this.listViewHandleData(PaymentDetailData.data);
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
                        <Text style={{ margin: 10, color: '#323232', fontSize: 15 }}>{rowData.kind}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>单据编号: {rowData.serialNumber}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>单据金额(元): {rowData.money}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>结算方式: {rowData.method}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 11 }}>单据日期: {rowData.date}</Text>
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
            <TitleBar onLeftClick={this._back} title="缴费明细表"/>
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
        backgroundColor: AppTheme.SeparatorColor
    }
});
export default PaymentDetail;