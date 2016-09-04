// Import some code we need
import React, {Component} from 'react';
import {View, StyleSheet, Text}from 'react-native';

// Create our component
class DayItem extends Component{
  render() {
    return <Text style={this.style() }>
      {this.props.day}
    </Text>
  }
  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }
  color() {
    var opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, ' + opacity.toString() + ')';
  }
  fontWeight() {
    var weight = 8 - this.props.daysUntil;
    return (weight * 100).toString();
  }
  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }
  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
};

// Make this code available elsewhere
export default DayItem;