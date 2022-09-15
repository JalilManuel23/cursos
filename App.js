import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Inicio',
            headerStyle: {
              backgroundColor: '#107590',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{ 
            title: 'LogIn',
            headerStyle: {
              backgroundColor: '#107590',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}  
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen} 
          options={{ 
            title: 'Registro',
            headerStyle: {
              backgroundColor: '#107590',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title} >Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View>
          <Text style={styles.button}>Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de sesión</Text>
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
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() =>{}}>
          <View>
            <Text style={styles.button}>Iniciar Sesión</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <View>
            <Text style={styles.button}>¿Aún no tienes cuenta? Registrate</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Registrarse</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View>
            <Text style={styles.button}>Regresar a Inicio</Text>
          </View>
        </TouchableOpacity>
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
  title: {
    fontSize: 35,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    fontSize: 18,
    backgroundColor: "#53a6bd",
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
  },
});