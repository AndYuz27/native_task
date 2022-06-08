import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { gStyle } from './style';
import {useState} from 'react'


export default function Main({ navigation }) {
    const loadScene = () => {
        navigation.navigate('PageOfPet')
    }

    const [news, setNews]= useState([
        
    ])

    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Andy's pet shop</Text>
        <Button title='Открыть страницу' onPress={loadScene}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

  });