import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerTitleStyle: {
        color: '#ffffff',
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            source={require('../resources/menu.png')}
            style={styles.menuIconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
    });
    StatusBar.setBarStyle('dark-content');
  }, [navigation, isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Inicio</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateReportScreen')}
        >
          <Image
            source={require('../resources/write.png')}
            style={styles.logoButton}
            resizeMode="contain"
          />
          <Text style={styles.TextButton}>Crear reporte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VisualizeReportScreen')}
        >
          <Image 
            source={require('../resources/profit-report.png')}
            style={styles.logoButton}
            resizeMode="contain"
          />
          <Text style={styles.TextButton}>Visualizar reporte</Text>
        </TouchableOpacity> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconImage: {
    marginLeft: 20,
    width: 25,
    height: 25,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 70,
  },
  button: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  logoButton: {
    width: 110,
    height: 110,
  },
  TextButton: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default HomeScreen;
