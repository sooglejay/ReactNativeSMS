
'use strict';
import React, { Component } from 'react';
import {   InteractionManager,  AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';
import ToggleBar from '../components/ToggleBar';
import {toastShort} from '../utils/ToastUtil';
import * as AppTheme from '../theme';

const LeftData = {
    "api": "GetStoreList",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": [{
        "id": 1,
        "kind": "应收款",
        "money": '122.02',
    }, {
            "id": 2,
            "kind": "已收金额",
            "money": '0.02',
        }, {
            "id": 3,
            "kind": "减免金额",
            "money": '0.00',
        }, {
            "id": 4,
            "kind": "退费金额",
            "money": '0.00',
        }, {
            "id": 5,
            "kind": "欠费金额",
            "money": '122.00',
        }
    ]
};


const RightData = {
    "api": "GetStoreList",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": [{
        "id": 1,
        "kind": "TEST",
        "money": '0.04',
    }, {
            "id": 2,
            "kind": "TEST2",
            "money": '0.02',
        }, {
            "id": 3,
            "kind": "TEST3",
            "money": '0.00',
        }, {
            "id": 4,
            "kind": "TEST4",
            "money": '0.00',
        }, {
            "id": 5,
            "kind": "合计",
            "money": '122.00',
        }
    ]
};

let rows = [...LeftData.data];
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 } });


class PaymentSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLeft: true,
            dataSource: ds.cloneWithRows([]),
            rows: rows
        }
        this._renderRow = this._renderRow.bind(this);
        this._onItemClick = this._onItemClick.bind(this);
        this._back = this._back.bind(this);
    }
    componentDidMount() {
        this.setState({
            dataSource: ds.cloneWithRows(this.state.rows)
        })
    }
    _back() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.pop();
        });
    }

    //here left means "应收款缴费汇总表"
    _updateListViewDataSource(isLeft) {
        if (isLeft) {
            toastShort("left");
            this.state.rows.splice(0, this.state.rows.length);
            this.state.rows = [...LeftData.data];
        } else {
            toastShort("right");
            this.state.rows.splice(0, this.state.rows.length);
            this.state.rows = [...RightData.data];
        }
        this.setState({
            dataSource: ds.cloneWithRows(this.state.rows),
            selectedLeft: isLeft
        });
    }

    _onItemClick(rowData, rowID) {
        this.state.rows.splice(rowID, 1);
        this.setState({
            dataSource: ds.cloneWithRows(this.state.rows),
        });
    }
    _renderHeader() {
        return (<View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between', backgroundColor: 'white'
        }}>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>类别</Text>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>金额(元) </Text>
        </View>);
    }
    //渲染每一项的数据
    _renderRow(rowData, sectionID, rowID) {
        let backgroundColor = rowID % 2 !== 0 ? '#f5f5f5' : 'white';
        return (
            <View key={rowData.id}>
                <TouchableOpacity onPress={() => this._onItemClick(rowData, rowID) }>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between', backgroundColor: backgroundColor,
                    }}>
                        <Text style={{ margin: 12, marginLeft: 20, color: '#323232', fontSize: 15 }}>{rowData.kind}</Text>
                        <Text style={{ margin: 12, marginRight: 20, color: '#323232', fontSize: 15 }}>{rowData.money}</Text>
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
            <TitleBar  isMain={false} title="缴费汇总表" onLeftClick = {this._back}/>
            <ToggleBar selectedLeft={this.state.selectedLeft} leftTitle="应收款缴费汇总表" rightTitle="其他缴费汇总表"
                onLeftClick={() => this._updateListViewDataSource(true) }
                onRightClick={() =>
                    this._updateListViewDataSource(false)
                } />
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
export default PaymentSummary;