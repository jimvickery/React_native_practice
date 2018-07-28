import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{ height: 20, backgroundColor: 'white'}} />
        <View style={{ height: 120, backgroundColor: '#323299'}} />
        <View style={{ height: 120, backgroundColor: '#323299'}} />
        <View style={{ height: 120, backgroundColor: '#323299'}} />
        {/* <View style={{ height: 20, backgroundColor: '#323299'}} /> */}
        <View style={{ height: 120, backgroundColor: '#323299'}} />
        <View style={{ height: 120, backgroundColor: '#323299'}} />
        <View style={{ height: 120, backgroundColor: '#323299'}} />
        {/* <View style={{ height: 400, backgroundColor: 'steelblue'}} /> */}
      </View>
    );
  }
}
