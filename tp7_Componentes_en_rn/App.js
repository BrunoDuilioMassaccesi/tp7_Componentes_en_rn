import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, TouchableOpacity, Pressable, Image } from 'react-native';

const imgLocal = require('./assets/Fondo1.avif');
const imgLocal2 = require('./assets/fondo.jpg');

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={imgLocal}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          
            <Image
              source={imgLocal2}
              style={styles.foto}
            />
            <Text style={styles.nombre}>Tu Nombre</Text>
       
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  profileContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 80,
    borderRadius: 20,
  },
  foto: {
    width: 110,
    height: 140,
    borderRadius: 60,
    marginBottom: 30,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
