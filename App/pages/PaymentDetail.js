'use strict';
import React, { Component } from 'react';
import {     AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';

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
        "method": "网上支付",
        "date": "2016-05-30",
    }, {
            "id": 2,
            "kind": "住宿费",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            "date": "2016-05-30",
        }, {
            "id": 3,
            "kind": "TEST",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            "date": "2016-05-30",
        }, {
            "id": 4,
            "kind": "TEST2",
            "serialNumber": "003975",
            "money": '0.04',
            "method": "网上支付",
            "date": "2016-05-30",
        }
    ]
};

let rows = [...PaymentDetailData.data];
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 } });


class PaymentDetail extends Component {
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            rows: rows
        }
    }
    componentDidMount() {
        this.setState({
            dataSource: ds.cloneWithRows(this.state.rows)
        })
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
                        <Text style={{ margin: 10, color: '#323232', fontSize: 15 }}>{rowData.serialNumber}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 15 }}>{rowData.money}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 15 }}>{rowData.method}</Text>
                        <Text style={{ margin: 10, color: '#323232', fontSize: 15 }}>{rowData.date}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View>
                <Text>{sectionID}</Text>
            </View>
        )
    }

    render() {
        return (<View>
            <TitleBar title="缴费明细表"/>
            <View style={{ flex: 1 }}>
                <ListView
                    initialListSize={1}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    style={{ backgroundColor: 'white', flex: 1 }}
                    onEndReachedThreshold={10}
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
        backgroundColor: '#eee'
    }
});
export default PaymentDetail;