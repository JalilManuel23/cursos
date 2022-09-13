
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  Button,
  Component,
} from "react-native";

import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default function App() {
  const [hidden] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        hidden={hidden}
      />
      
      
      <View style={styles.container}>
        <Text style={styles.text}>Inicio de sesión</Text>
        <TextInput 
          editable 
          maxLength={40}           
          placeholder={'Correo electrónico'}
          style={styles.input}
        />
        <TextInput 
          editable 
          maxLength={40}           
          placeholder={'Contraseña'}
          style={styles.input}
        />
        <Button title='Iniciar Sesión'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 55,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});
