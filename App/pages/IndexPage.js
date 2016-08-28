'use strict';
import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView, InteractionManager, } from 'react-native';
import ShortLine from '../components/ShortLine';
import ShortColumn from '../components/ShortColumn';

import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
const BANNER_IMGS = [
  require('../imgs/icon_university.png'),
  require('../imgs/icon_university.png'),
  require('../imgs/icon_university.png'),
  require('../imgs/icon_university.png')
];
export default class IndexPage extends Component {
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={ 4 } />;
  }
  render() {
    return (
      <View>
        <ScrollView
          style={ { flex: 1 } }
          showsVerticalScrollIndicator={ false }>
          <View>
            <IndicatorViewPager
              style={ { height: 140 } }
              indicator={ this._renderDotIndicator() }>
              <View>
                <Image source={ BANNER_IMGS[0]} />
              </View>
              <View>
                <Image source={ BANNER_IMGS[1]} />
              </View>
              <View>
                <Image source={ BANNER_IMGS[2]} />
              </View>
              <View>
                <Image source={ BANNER_IMGS[3]} />
              </View>
            </IndicatorViewPager>
            <View style={styles.viewWapperStyle}>
              <View style={ styles.viewRowStyle }>
                <TouchableOpacity style={ styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={ styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      缴费汇总表
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={ styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      缴费明细表
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={ styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      应缴费统计表
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <ShortLine/>
              <View style={ styles.viewRowStyle }>
                <TouchableOpacity style={ styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={ styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      应收款缴费
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={ styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      其他缴费
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={ styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      未完成订单
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <ShortLine/>
              <View style={ styles.viewRowStyle}>
                <TouchableOpacity style={styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      已完成订单
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={styles.imageStyle} />
                    <Text style={styles.textStyle}>
                      待定
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={styles.touchableOpacityStyle }>
                  <View>
                    <Image
                      source={ require('../imgs/icon_university.png') }
                      style={styles.imageStyle } />
                    <Text style={styles.textStyle}>
                      待定
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewWapperStyle: { justifyContent: 'center', flexDirection: 'column', flex: 1, margin: 8, borderWidth: 1, borderColor: '#d9d9d9' },
  viewRowStyle: { flexDirection: 'row', height: 100 },
  touchableOpacityStyle: { flex: 1, alignSelf:'center',alignItems: 'center', justifyContent: 'center' },
  imageStyle: { width: 40, height: 40,alignSelf:'center', alignItems: 'center', justifyContent: 'center' },
  textStyle:{fontSize:15,alignSelf:'center', alignItems: 'center', justifyContent: 'center' },
});
