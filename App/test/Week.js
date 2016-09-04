// Import some code we need
var Moment = require('moment')
import React, {Component} from 'react';
import {View, StyleSheet, Text}from 'react-native';
import  DayItem  from './DayItem';

// Create a react component
class Weekdays extends Component {
    render() {
        return <View style={styles.container}>
            {this.days() }
        </View>
    }
    days() {
        var daysItems = [];

        for (var i = 1; i < 8; i++) {
            var day = Moment().add(i, 'days').format('dddd');
            daysItems.push(
                <DayItem key={i} day={day} daysUntil={i} />
            )
        }

        return daysItems
    }
};

// Style the React component
const  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Moves stuff height wise
        alignItems: 'center' // Moves stuff width wise
    }
});

export default Weekdays;