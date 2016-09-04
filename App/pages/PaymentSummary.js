
'use strict';
import React, { Component } from 'react';
import {   InteractionManager, AppRegistry,
    View, StatusBar, Text, ListView, Platform, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import TitleBar from '../components/TitleBar';
import ToggleBar from '../components/ToggleBar';
import {toastShort} from '../utils/ToastUtil';
import * as AppTheme from '../theme';
import {API_SERVER, HandShakeCode, bodyObj, RTN_CODE} from '../common/API.js';
import {key_XH} from'../common/Storage';


var data=[];
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 } });
class PaymentSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLeft: true,
            dataSource: ds.cloneWithRows(data),
            paymentSummaryReceivableData:[],
            paymentSummaryOtherData:[],
        }
        this._renderRow = this._renderRow.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._onItemClick = this._onItemClick.bind(this);
        this._back = this._back.bind(this);
        this._updateListViewDataSource=this._updateListViewDataSource.bind(this);
    }
    componentDidMount() {
        this.foo();
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
        console.log("取学号的值不为null:" + XH);
        // We have data!!
      }
    } catch (error) {
      // Error retrieving data
    } finally {
      await this._getOtherPaymentFromApiAsync(XH);
      await this._getReceivablePaymentFromApiAsync(XH);

    }
  }

  async _getReceivablePaymentFromApiAsync(xuehao) {
    return fetch(API_SERVER, bodyObj('TRAN_CODE=' + HandShakeCode.paymentTableRequire + '&XH=' + xuehao))
      .then((response) => {
        if (response.status == 200) {
          // return {"BJ":"机电13(3)-1","EMAIL":"","MZ":"","RXNF":"2015","SFZ":"510602199408067003","SJ":"","XH":"3320130193126","XM":"邹明珂","YHK":"","YX":"机械工程学院","ZY":"机械工程与自动化学院","ZZ":""}}; 
          return response.json();
        }
        else {
          toastShort('系统错误！');
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((responseJson) => {    
         data.splice(0, data.length)
         var index=0;
         for(var i in responseJson){
             var obj = {};
             var kind = "";
                if(i=="YSK"){
                    kind="应收款";
                }else if(i=="YSJE"){
                   kind="已收金额";
                }else if(i=="JMJE"){
                   kind="减免金额";
                }else if(i=="TFJE"){
                    kind="退费金额";
                }else if(i=="QFJE"){
                    kind="欠费金额";
            }
            obj.kind=kind;
            obj.id= index;
            obj.money = responseJson[i];
            data[index++]=obj;
         }
        this.setState(() => {
          return Object.assign({}, this.state, {
            dataSource: ds.cloneWithRows(data),
            paymentSummaryReceivableData:[...data],
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async _getOtherPaymentFromApiAsync(xuehao) {
    return fetch(API_SERVER, bodyObj('TRAN_CODE=' + HandShakeCode.paymentTableOthers + '&XH=' + xuehao))
      .then((response) => {
        if (response.status == 200) {
          // return {"BJ":"机电13(3)-1","EMAIL":"","MZ":"","RXNF":"2015","SFZ":"510602199408067003","SJ":"","XH":"3320130193126","XM":"邹明珂","YHK":"","YX":"机械工程学院","ZY":"机械工程与自动化学院","ZZ":""}}; 
          return response.json();
        }
        else {
          toastShort('系统错误！');
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((responseJson) => {
        data.splice(0, data.length)
        for (var index = 0; index < responseJson.length; index++) {
            var element = responseJson[index];
            var obj = {};
            obj.kind = element.XM;
            obj.money = element.JE;
            obj.id = index;
            data[index]=obj;
        }
         this.setState(() => {
          return Object.assign({}, this.state, {
           paymentSummaryOtherData:[...data],
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

    //here left means "应收款缴费汇总表"
    _updateListViewDataSource(isLeft) {
         data.splice(0, data.length)
        if(isLeft){
            data  = [...this.state.paymentSummaryReceivableData];
        }else{
            data = [...this.state.paymentSummaryOtherData];
        }      
        this.setState(() => {
          return Object.assign({}, this.state, {
            dataSource: ds.cloneWithRows(data),
            selectedLeft: isLeft
          });
        });
    }

    _onItemClick(rowData, rowID) {
        data.splice(rowID, 1);
        this.setState({
            dataSource: ds.cloneWithRows(data),
        });
    }
    _renderHeader() {
        return (
            <View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: 'white'
                }}>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>类别</Text>
                    <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>金额(元) </Text>

                </View>
                <View style={styles.separator} />
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
                        <Text style={{ margin: 12, color: '#323232', fontSize: 15 }}>{rowData.kind}</Text>
                        <Text style={{ margin: 12,  color: '#323232', fontSize: 15 }}>{rowData.money}</Text>
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