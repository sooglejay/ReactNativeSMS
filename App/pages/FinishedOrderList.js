
'use strict';
import React, { Component } from 'react';
import {     AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';
import {toastShort} from '../utils/ToastUtil';
const OrderFinishedData = {
    "api": "GetStoreList",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": [{
        "id": 1,
        "orderNumber": "201605003423023",
        "money": '122.02',
        "orderDate": "20160530 11:39:33",
        "orderDescription": "学费2016，住宿费2016"
    }, {
            "id": 2,
            "orderNumber": "201605003423023",
            "money": '122.02',
            "orderDate": "20160530 11:39:33",
            "orderDescription": "学费2016，住宿费2016"
        }, {
            "id": 3,
            "orderNumber": "201605003423023",
            "money": '122.02',
            "orderDate": "20160530 11:39:33",
            "orderDescription": "学费2016，住宿费2016"
        }, {
            "id": 4,
            "orderNumber": "201605003423023",
            "money": '122.02',
            "orderDate": "20160530 11:39:33",
            "orderDescription": "学费2016，住宿费2016"
        }, {
            "id": 5,
            "orderNumber": "201605003423023",
            "money": '122.02',
            "orderDate": "20160530 11:39:33",
            "orderDescription": "学费2016，住宿费2016"
        }
    ]
};

let rows = [...OrderFinishedData.data];
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 } });


class FinishedOrderList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLeft: true,
            dataSource: ds.cloneWithRows([]),
            rows: rows
        }
        this._renderRow = this._renderRow.bind(this);
        this._onItemClick = this._onItemClick.bind(this);
    }
    componentDidMount() {
        this.setState({
            dataSource: ds.cloneWithRows(this.state.rows)
        })
    }

    _onItemClick(rowData, rowID) {
        toastShort("hello item");
    }
    _renderHeader() {
        return (<View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between', backgroundColor: 'white'
        }}>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单号</Text>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单时间</Text>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单金额(元) </Text>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>订单内容</Text>
        </View>);
    }
    //渲染每一项的数据
    _renderRow(rowData, sectionID, rowID) {
        let backgroundColor = rowID % 2 == 0 ? '#f5f5f5' : 'white';
        return (
            <View key={rowData.id}>
                <TouchableOpacity onPress={() => this._onItemClick(rowData, rowID) }>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between', backgroundColor: backgroundColor,
                    }}>
                        <Text ellipsizeMode='middle' style={{ marginLeft: 10, marginTop: 10, marginBottom: 10, color: '#323232', fontSize: 10 }}>{rowData.orderNumber}</Text>
                        <Text ellipsizeMode='middle' style={{ marginTop: 10, marginBottom: 10, color: '#323232', fontSize: 10 }}>{rowData.orderDate}</Text>
                        <Text ellipsizeMode='middle' style={{ marginTop: 10, marginBottom: 10, color: '#323232', fontSize: 10 }}>{rowData.money}</Text>
                        <Text ellipsizeMode='middle' style={{ marginTop: 10, marginBottom: 10, marginRight: 12, color: '#323232', fontSize: 10 }}>{rowData.orderDescription}</Text>
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
            <TitleBar  isMain={false} title="已完成订单" onLeftClick = {() => { toastShort("已完成订单") } }/>

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
        backgroundColor: '#eee'
    }
});
export default FinishedOrderList;