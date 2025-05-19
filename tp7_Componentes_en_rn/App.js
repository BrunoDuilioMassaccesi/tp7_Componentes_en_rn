import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, TouchableOpacity, Pressable, Image, Button } from 'react-native';
import React, { useState } from 'react';

const imgLocal = require('./assets/Fondo1.avif');
const imgLocal2 = require('./assets/fondo.jpeg');


export default function App() {
const [contador, setContador] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={imgLocal}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <StatusBar style='light'></StatusBar>
            <Image
              source={imgLocal2}
              style={styles.foto}
            />
            <Text style={styles.nombre}>DreamMatch</Text>
            <Text style={styles.textContador}>Contador de InfoPibes:</Text>

            <TouchableOpacity style={styles.boton}>  
                  <Text style={styles.numeroContador}>{contador}</Text>
            </TouchableOpacity>
            <Pressable
                style={styles.boton}
                onPress={() => setContador(contador + 1) }>
                <Text style={styles.textoBoton}>Soy un infoPibe</Text>
            </Pressable>
            <TextInput
            style={styles.input}
            placeholder='¿No sos un InfoPibe? , justifica aca...'
            />
            <TouchableOpacity style={styles.justificar} onPress={() => alert('No te cree nadieeee')}>
              <Text style={styles.just}>justificar</Text>
            </TouchableOpacity>


            

            
       
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
    alignItems: 'center',
    paddingTop:30,     
  },
  profileContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 80,
    borderRadius: 20,
  },
  foto: {
    width: 170,
    height: 140,
    borderRadius: 60,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    fontSize:30,
  },
  textContador:
  {
    fontSize:30,
    marginTop:10,
    fontWeight: 'bold',
    color:'grey',
  },
  boton:
  {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBoton:
  {
    fontWeight:'bold',
  },
  pregunta:
  {
    fontWeight:'bold',
    marginTop:30,
  },
  input:
  {
    height: 40,
    width: '70%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'lightGrey',
    color: '#000',
    textAlign: 'center',

  },
  just:
  {
    backgroundColor: 'grey',
    fontWeight:'bold',
    marginTop:10,
    padding:5,
    borderRadius:5,

  },
});
