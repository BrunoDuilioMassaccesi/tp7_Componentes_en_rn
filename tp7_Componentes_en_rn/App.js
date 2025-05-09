import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, TouchableOpacity, Pressabler} from 'react-native';

const imgLocal = require('./assets/fondo.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={imgLocal}
      resizeMode="cover"
      style = {styles.backgroundImage}
      >
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
