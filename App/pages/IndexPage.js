'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    InteractionManager,
} from 'react-native';
import ShortLine from '../components/ShortLine';
import ShortColumn from '../components/ShortColumn';

import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
const BANNER_IMGS = [
    require('../imgs/icon_university.png'),
    require('../imgs/icon_university.png'),
    require('../imgs/icon_university.png'),
    require('../imgs/icon_university.png')
];
export default class IndexPage extends Component {
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
    }
    render() {
        return (
            <View>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <IndicatorViewPager
                        style={{ height: 140 }}
                        indicator={this._renderDotIndicator() }
                        >
                        <View><Image source={BANNER_IMGS[0]}/></View>
                        <View><Image source={BANNER_IMGS[1]}/></View>
                        <View><Image source={BANNER_IMGS[2]}/></View>
                        <View><Image source={BANNER_IMGS[3]}/></View>
                    </IndicatorViewPager>
                </ScrollView>
                <View style={{ flexDirection: 'row', margin: 8, borderWidth: 8, borderColor: '#ff0000' }}>
                    <View>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>缴费汇总表</Text>
                            </View>
                        </TouchableOpacity>

                        <ShortColumn/>

                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>缴费明细表</Text>
                            </View>
                        </TouchableOpacity>

                        <ShortColumn/>

                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>应缴费统计表</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ShortLine/>

                    <View>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>应收款缴费</Text>
                            </View>
                        </TouchableOpacity>

                        <ShortColumn/>

                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>其他缴费</Text>
                            </View>
                        </TouchableOpacity>

                        <ShortColumn/>

                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>未完成订单</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ShortLine/>
                    <View>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>已完成订单</Text>
                            </View>
                        </TouchableOpacity>

                        <ShortColumn/>

                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>待定</Text>
                            </View>
                        </TouchableOpacity>

                        <ShortColumn/>

                        <TouchableOpacity style={{ flex: 1 }}>
                            <View>
                                <Image source={require('./imgs/icon_university.png') }/>
                                <Text>待定</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}