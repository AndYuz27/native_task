import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { gStyle } from './style';


export default function PageOfPet() {
    return (
      <View style={gStyle.main}>
      <Image
        source={require('./img/awh.jpg')} style = {styles.tinyLogo}
      />
        <Text>Andy's pet shop by AndYuz27</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 380,
      height: 288,
    },
    logo: {
      width: 66,
      height: 58,
    },
  
  });