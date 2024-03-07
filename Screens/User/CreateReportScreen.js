import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native'; // Importa Picker directamente de 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Picker } from '@react-native-picker/picker'; // Importa Picker de '@react-native-picker/picker'

const CreateReportScreen = () => {
  const navigation = useNavigation();
  const [fechaHoy, setFechaHoy] = useState('');
  const [folio, setFolio] = useState('');
  const [unidad, setUnidad] = useState(''); // Cambiado a estado de cadena
  const [area, setArea] = useState('');
  const [datosEquipo, setDatosEquipo] = useState('');
  const [servicio, setServicio] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    setFechaHoy(formattedDate);

    const folioAutomatico = `F${today.getTime()}`;
    setFolio(folioAutomatico);
  }, []);

  const handleEnviarClick = () => {
    console.log('Enviando datos:', { fechaHoy, folio, unidad, area, datosEquipo, servicio });
  };
  StatusBar.setBarStyle('dark-content');
  React.useLayoutEffect(() => {
    
    navigation.setOptions({
      
      title: '',
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Inicio')}
        >
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
    
  }, [navigation, isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Solicitud de Reporte</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Fecha: </Text>
          <Text style={styles.dateToday}>{fechaHoy}</Text>
        </View>
        <View style={styles.folioContainer}>
          <Text style={styles.folioLabel}>Folio: </Text>
          <Text style={styles.automaticFolio}>{folio}</Text>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Unidad</Text>
             <View style={styles.pickerContainer}>
               <Picker
                selectedValue={unidad}
                onValueChange={(itemValue) => setUnidad(itemValue)}
                style={styles.inputOption}>
                <Picker.Item label="Unidad 1" value="Unidad 1" />
                <Picker.Item label="Unidad 2" value="Unidad 2" />
              </Picker>
            </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Área</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el área"
            value={area}
            onChangeText={(text) => setArea(text)}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Datos del equipo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese los datos del equipo"
            value={datosEquipo}
            onChangeText={(text) => setDatosEquipo(text)}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Servicio a realizar</Text>
          <TextInput
            style={styles.inputService}
            placeholder="Ingrese el servicio a realizar"
            value={servicio}
            onChangeText={(text) => setServicio(text)}
          />
        </View>
        <TouchableOpacity onPress={handleEnviarClick} style={styles.sendButton}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
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
  headerContainer: {
    position: 'relative',
    top: 0,
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerTitle: {
    top: 0,
    position: 'relative',
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    alignSelf:'flex-end',
    marginBottom: 10,
  },
  dateLabel:{
    fontSize:20,
    fontWeight: 'bold',
  },
  dateToday:{
    fontSize:20,
    color: '#154F3A',
    fontWeight: 'bold',
  },
  folioContainer: {
    flexDirection: 'row',
    alignSelf:'flex-end',
    marginBottom: 10,
  },
  folioLabel:{
    fontSize:20,
    fontWeight: 'bold',
  },
  automaticFolio:{
    fontSize:20,
    color: '#154F3A',
    fontWeight: 'bold',
  },
  backButton: {
    marginLeft: 20,
  },
  formContainer: {
    marginTop: 20,
    width: '80%',
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  input: {
    fontSize: 16,
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputService:{
    borderRadius: 10,
    fontSize: 16,
    padding: 10,
    height: 180,
    borderWidth: 1,
    textAlignVertical:'top',
  },
  sendButton: {
    backgroundColor: '#154F3A',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateReportScreen;
