import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome6';

const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
      <View style={styles.logoContainer}>
          <Image
            source={require('../resources/Logo_IMSS_White.png')}
            style={styles.logo}
          />
        </View>
        <DrawerItem
          label="Inicio"
          icon={() => <Icon name="house" size={20} color="white" />}
          onPress={() => {
            navigation.navigate('Inicio');
          }}
          labelStyle={styles.drawerItemLabel}
        />
         <DrawerItem
          label="Notificaciones"
          icon={() => <Icon name="bell" size={20} color="white" />}
          onPress={() => {
            // Acción personalizada al hacer clic
          }}
          labelStyle={styles.drawerItemLabel}
        />
         <DrawerItem
          label="Ajustes"
          icon={() => <Icon name="gear" size={20} color="white" />}
          onPress={() => {
            // Acción personalizada al hacer clic
          }}
          labelStyle={styles.drawerItemLabel}
        />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          navigation.navigate('Cerrar Sesión');
        }}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
    flex: 1,
    backgroundColor: '#154F3A', 
  },
  logoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 30,
  },
  drawerItemLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
  },
  logoutButton: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 25,
    fontWeight:'bold',
  },
});

export default DrawerContent;
