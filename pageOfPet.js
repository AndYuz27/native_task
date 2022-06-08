import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { gStyle } from './style';


export default function PageOfPet() {
    return (
      <View style={gStyle.main}>
<Image source = {{uri:'https://downloader.disk.yandex.ru/preview/e4ebfa8fe684e715a70b69fa7a38e509d872b21f3acb74887c19c669ed30ef62/62a127f4/v75gDk9MRRj2wzJzI8OW40k-phokaSPXBVLmnEqifXYtYqJ0GoCet3bZHs8xvF6ZiWctObZo4NNWWWouZtg0IQ%3D%3D?uid=0&filename=20220521_122056.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}}
style = {{ width: '80%', height: '70%' }}
/>
        <Text>Andy's pet shop by AndYuz27</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

  });