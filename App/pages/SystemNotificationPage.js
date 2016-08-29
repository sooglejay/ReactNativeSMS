'use strict';
import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, Dimensions, ListView,
    TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, InteractionManager, } from 'react-native';
import ShortLine from '../components/ShortLine';
import ShortColumn from '../components/ShortColumn';
import { toastShort } from '../utils/ToastUtil';
const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 10 : 0);

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
        return (<View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between', backgroundColor: 'white'
        }}>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>收费区间</Text>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>收费项目</Text>
            <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>缴费金额(元) </Text>
        </View>);
    }

    render() {
        return (
            <View>
                <View style={{ backgroundColor: '#2bb4f7', height: STATUS_BAR_HEIGHT }}></View>
                <View style={styles.topbar_bg}>
                    <TouchableOpacity onPress={() => { } }
                        style={styles.topbar_left_item}>
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={require('../imgs/icon_university.png') }
                            />
                    </TouchableOpacity>
                    <View style={styles.topbar_center_bg}>
                        <Text style={styles.topbar_center_tv}>学生缴费服务平台</Text>
                    </View>
                    <TouchableOpacity onPress={() => { } }
                        style={styles.topbar_right_item}>
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

                        <View>
                        </View>

                        <View>
                        </View>

                        <View style={{ flex: 1 }}>
                            {this.renderContent(this.state.dataSource.cloneWithRows(
                                this.state.storeLists === undefined ? [] : this.state.storeLists)) }
                        </View>
                    </View>
                </ScrollView>


            </View>

        );
    }
}

let styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#eee'
    }
});