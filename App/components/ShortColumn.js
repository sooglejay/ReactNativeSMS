/**
 * 设置界面Item布局
 */
'use strict';
import React, {PropTypes} from 'react';
import{ 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

const ShortColumn = () => (
    <View style={{backgroundColor:'white'}}>
        <Image source={require('../imgs/ic_short_column.png')} 
               style={styles.short_line}/>           
    </View>
);
const styles=StyleSheet.create({
    short_line:{
    },
});
export default ShortColumn;