import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Combinaciones de usuario y contraseña para diferentes tipos de sesiones
    const userCredentials = [
      { username: '1', password: '1', role: 'user' },
      { username: '2', password: '2', role: 'admin' },
      { username: '3', password: '3', role: 'technical' },
    ];

    // Buscar las credenciales ingresadas en la lista
    const matchedUser = userCredentials.find(cred => cred.username === username && cred.password === password);

    if (matchedUser) {
      // Redirigir según el tipo de sesión
      switch (matchedUser.role) {
        case 'user':
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreenUser' }],
            })
          );
          console.log('Inicio de sesión exitoso como usuario');
          break;
        case 'admin':
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreenAdmin' }],  // Reemplaza 'PantallaAdmin' con el nombre de tu pantalla de administrador
            })
          );
          console.log('Inicio de sesión exitoso como administrador');
          break;
        case 'technical':
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreenTech' }],  // Reemplaza 'PantallaTecnico' con el nombre de tu pantalla de técnico
            })
          );
          console.log('Inicio de sesión exitoso como técnico');
          break;
        default:
          break;
      }
    } else {
      console.log('Nombre de usuario o contraseña incorrectos');
      Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('./Screens/resources/Logo_IMSS.png')}
        style={styles.startLogo}
      />
      <Text style={styles.welcomeText}>¡Bienvenido!</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(text) => setUsername(text)}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#154F3A"
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
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
  startLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    color: '#154F3A',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#154F3A',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;