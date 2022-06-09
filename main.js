import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { gStyle } from './style';
import {useState, useEffect} from 'react'
import Card from "./Card";
import { getCats } from "./api";

export default function Main({ navigation }) {
    const loadScene = () => {
        navigation.navigate('PageOfPet')
    }

    const loadScene2 = () => {
      navigation.navigate('Edit')
  }
  const [cats, setCats] = useState([]);

  useEffect(() => {
      const setNewCats = async () => {
          let res = await getCats();
          console.log(res);
          setCats(res);
      };
      setNewCats();
  }, []);

    return (
      <View style={gStyle.main}>
        <ScrollView>

        <Text style={gStyle.title}>Andy's pet shop</Text>
        <Button title='Апаратная' onPress={loadScene2}/>
        {cats.map((el, index) => {
                return <Card key={index} cat={el} />;
            })}
        <Button title='О приложении' onPress={loadScene}/>

      </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

  });