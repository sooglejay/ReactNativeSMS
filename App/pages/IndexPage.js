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
            </View>
        );
    }
}