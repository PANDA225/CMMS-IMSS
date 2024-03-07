import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const VisualizeReportScreen = () => {
    const navigation = useNavigation();
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: '',
        headerLeft: () => (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Inicio')}
          >
            <Icon name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>¡Bienvenido a la creación de informes!</Text>
        {/* Add your content for CreateReport screen here */}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
    },
    backButton: {
      marginLeft: 10,
    },
  });
  
  export default VisualizeReportScreen;
