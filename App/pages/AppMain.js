// 'use strict';

// import React from 'react';
// import TextField from 'react-native-md-textinput';

// import {
//     Dimensions,
//     Image,
//     InteractionManager,
//     View,
//     ScrollView,
//     StyleSheet,
//     Text,
// } from 'react-native';

// // class AppMain extends React.Component {
// //     constructor(props) {
// //         super(props);
// //     }
// //     render() {
// //         return (
// //             <View><Text>qwqw</Text></View>
// //         );
// //     }
// // }
// class AppMain extends React.Component {
//     render() {
//         return (
//             <View>

//                 <TextField
//                     dense={true}
//                     label={'请输入用户名 '}
//                     highlightColor={'#00BCD4'}
//                     keyboardType={'numeric'}
//                     />
//                 <TextField
//                     dense={true}
//                     label={'请输入用户名 '}
//                     highlightColor={'#00BCD4'}
//                     keyboardType={'numeric'}
//                     />
//             </View>
//         );
//     }
// }
// export default AppMain;


/**
 * Sample React Native App
 * that demos the react-native-md-textinput
 */
'use strict';
import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView
} from "react-native";

import TextField from 'react-native-md-textinput';

const themeColor = '#ffffff';
class Login extends Component {
    constructor(props: Object) {
        super(props);
        this.inputs = {
            userName: '',
            password: '',
            verifyCode: '',
        };
    }
    render() {
        let name = '';
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.welcome}>
                    学生缴费服务平台
                </Text>

                <TextField  style={{
                    paddingTop: 60
                }}
                    label={'请输入用户名'}
                    ref="userName"
                    highlightColor={themeColor}
                    returnKeyType={'next'}
                    onChangeText={(text) => {
                    } }
                    inputStyle={styles.textFieldInputStyle}
                    value={''}
                    dense={true}
                    onSubmitEditing={() => this.refs.password.focus() }
                    />
                <TextField
                    ref="password"
                    secureTextEntry={true}
                    label={'请输入密码'}
                    highlightColor={themeColor}
                    inputStyle={styles.textFieldInputStyle}
                    onChangeText={(text) => {
                    } }
                    returnKeyType={'next'}
                    onSubmitEditing={() => this.refs.verifyCode.focus() }
                    dense={true}
                    onBlur={() => {
                    } }
                    />
                <TextField
                    ref="verifyCode"
                    label={'请输入验证码'}
                    highlightColor={themeColor}
                    inputStyle={styles.textFieldInputStyle}
                    onChangeText={(text) => {
                    } }
                    onBlur={() => {
                    } }
                    />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2bb5f6',
        paddingTop: 60,
        paddingLeft: 16,
        paddingRight: 16
    },
    welcome: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    textFieldInputStyle: {
        paddingTop: 6,
        color: '#ffffff',
        fontSize: 18,

    }

});


export default Login;
