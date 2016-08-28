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
                <Image source={ BANNER_IMGS[0] } />
              </View>
              <View>
                <Image source={ BANNER_IMGS[1] } />
              </View>
              <View>
                <Image source={ BANNER_IMGS[2] } />
              </View>
              <View>
                <Image source={ BANNER_IMGS[3] } />
              </View>
            </IndicatorViewPager>
            <View style={ { justifyContent: 'center', flexDirection: 'column', flex: 1, margin: 8, borderWidth: 1, borderColor: '#ff0000' } }>
              <View style={ { flexDirection: 'row', height: 100 } }>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      缴费汇总表3232
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      缴费明细表
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      应缴费统计表
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <ShortLine/>
              <View style={ { flexDirection: 'row', height: 100 } }>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      应收款缴费
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      其他缴费
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      未完成订单
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <ShortLine/>
              <View style={ { flexDirection: 'row', height: 100 } }>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      已完成订单
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
                      待定
                    </Text>
                  </View>
                </TouchableOpacity>
                <ShortColumn/>
                <TouchableOpacity style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                  <View>
                    <Image
                           source={ require('../imgs/icon_university.png') }
                           style={ { width: 40, height: 40, alignItems: 'center' } } />
                    <Text>
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