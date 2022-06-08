import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from './header'
import { gStyle } from './style';
import * as Font from 'expo-font'
import MainStack from './nav';


const fonts = () => Font.loadAsync({
  'sc-bold': require('./assets/Scada-Bold.ttf'),
  'sc-regular': require('./assets/Scada-Regular.ttf')

})

// import { Provider } from 'react-redux';
// import store from './app/redux/store';
// import Route from './app/routes';

export default function App() {
  
 
  return (
    // <View style={gStyle.main}>
    //   <Text>Hello</Text>
    //   {/* <Header/> */}
    // </View>
    <MainStack/>
  );

}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: 'silver',
  },
  text:{
    fontSize: 18,
    color: 'red',
    textAlign: 'center'
  }
});
