'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView
} from 'react-native';

const STORE_DATA = {
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
const STORE_DATA2 = {
    "api": "GetStoreList",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": [{
        "id": 1,
        "kind": "wwwwwwww",
        "money": 'wwwww.02',
    }, {
            "id": 2,
            "kind": "wwwwwww",
            "money": 'wwwwww.02',
        }, {
            "id": 3,
            "kind": "ddddd",
            "money": '0.ddddd',
        }, {
            "id": 4,
            "kind": "ddd",
            "money": '0ddddddd.00',
        }, {
            "id": 5,
            "kind": "ddddffffgg",
            "money": '1gggggg22.00',
        }
    ]
};

var rows = STORE_DATA.data;
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 } });

var SampleApp = React.createClass({

    getInitialState() {
        return {
            dataSource: ds.cloneWithRows([]),
            rows: rows
        };
    },
    componentDidMount() {
        this.setState({
            dataSource: ds.cloneWithRows(this.state.rows)
        })
    },
    _updateListViewDataSource(rowID) {
        this.state.rows.splice(0, this.state.rows.length,...STORE_DATA2.data)
        this.setState({
            dataSource: ds.cloneWithRows(this.state.rows),
        })
    },
    _renderHeader() {
        return (<View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between', backgroundColor: 'white'
        }}>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>类别</Text>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>金额(元) </Text>
        </View>);
    },

    //渲染每一项的数据
    _renderRow(rowData, sectionID, rowID) {
        let backgroundColor = rowID % 2 !== 0 ? '#f5f5f5' : 'white';
        return (
            <View key={rowID}>
                <TouchableOpacity onPress={() => { this._updateListViewDataSource(rowID) } }>
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
    ,
    _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.separator} />
        );
    },

    render() {
        return (
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
        );
    }

});
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 19,
        marginBottom: 5,
    },
    separator: {
        height: 1,
        backgroundColor: '#eee'
    },
});

export default SampleApp;