import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';
import SensorCard from '../components/SensorCard'; 

const DashboardScreen = () => {
  const greenhouseData = {
    temperature: 28.5,
    humidity: 62,
    lightIntensity: 83,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Invernadero Automatizado</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>Principal</Text>

        <View style={styles.dashboardContainer}>
          <SensorCard title="Temperatura" value={`${greenhouseData.temperature}°C`} />
          <SensorCard title="Humedad" value={`${greenhouseData.humidity}%`} />
          <SensorCard title="Iluminación" value={`${greenhouseData.lightIntensity}%`} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Controles" />
          <Button title="Ver Historial" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3748',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,  // Ajusté el espacio superior aquí para bajar el encabezado
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerTitle: {
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#ffffff',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 25,
    color: '#28a745',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dashboardContainer: {
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
});

export default DashboardScreen;
