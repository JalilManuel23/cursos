import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
              backgroundColor: '#1E6091',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Aquí irá el menú')}>
                <Ionicons name="md-menu" size={40} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#1E6091',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Aquí irá el menú')}>
                <Ionicons name="md-menu" size={40} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Registro',
            headerStyle: {
              backgroundColor: '#1E6091',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Aquí irá el menú')}>
                <Ionicons name="md-menu" size={40} color="white" />
              </TouchableOpacity>
            ),
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
          keyboardType="email-address"
        />
        <TextInput
          editable
          maxLength={40}
          placeholder={'Contraseña'}
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => alert('Recupera Tu Contraseña')}>
          <Text style={styles.normal}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Inicio de Sesión Exitoso')}>
            <Text style={styles.button_login} >Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.button_signup}>¿Aún no tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        editable
        maxLength={40}
        placeholder={'Nombre(s)'}
        style={styles.input}
      />
      <TextInput
        editable
        maxLength={40}
        placeholder={'Apellidos'}
        style={styles.input}
      />
      <TextInput
        editable
        maxLength={40}
        placeholder={'Número de Teléfono'}
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        editable
        maxLength={40}
        placeholder={'Correo Electrónico'}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        editable
        maxLength={40}
        placeholder={'Contraseña'}
        style={styles.input}
        secureTextEntry={true}
      />
      <TextInput
        editable
        maxLength={40}
        placeholder={'Verificar Contraseña'}
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => alert('Cuenta Creada Correctamente')}>
        <Text style={styles.button_login}>Crear Cuenta</Text>
      </TouchableOpacity>

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
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: 350,
    height: 50,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    fontSize: 18,
    color: '#fefefe',
    backgroundColor: "#1E6091",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginVertical: 10,
  },
  button_login: {
    alignItems: "center",
    fontSize: 18,
    color: '#fefefe',
    backgroundColor: "#168AAD",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginVertical: 10,
  },
  button_signup: {
    alignItems: "center",
    fontSize: 18,
    color: '#fefefe',
    backgroundColor: "#1E6091",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginVertical: 10,
  },
  normal: {
    fontSize: 15,
    marginBottom: 15,
    color: '#6d6d6d',
    textDecorationLine: 'underline',
  },
});