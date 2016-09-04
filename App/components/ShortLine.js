/**
 * 设置界面Item布局
 */
'use strict';
import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, } from 'react-native';

const ShortLine = () => (
<View style={ { backgroundColor: 'white',flex:1 } }>
  <Image
         source={ require('../imgs/ic_short_bar.png') }
         style={styles.short_line} />
</View>
);
const styles = StyleSheet.create({
  short_line: {
    flex:1
  },
});
export default ShortLine;