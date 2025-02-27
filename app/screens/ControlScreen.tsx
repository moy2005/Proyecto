import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ControlsScreen = () => {
  const [lightState, setLightState] = useState(false);
  const [fanState, setFanState] = useState(false);
  const [wateringState, setWateringState] = useState(false);

  const toggleLight = () => setLightState(!lightState);
  const toggleFan = () => setFanState(!fanState);
  const toggleWatering = () => setWateringState(!wateringState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Control de Dispositivos</Text>

      <View style={styles.controlsContainer}>
        <View style={styles.controlCard}>
          <Text style={styles.controlTitle}>Luz</Text>
          <TouchableOpacity
            style={[styles.statusIndicator, lightState ? styles.onIndicator : styles.offIndicator]}
            onPress={toggleLight}>
            <Text style={styles.statusText}>{lightState ? 'Encendida' : 'Apagada'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.controlCard}>
          <Text style={styles.controlTitle}>Ventilador</Text>
          <TouchableOpacity
            style={[styles.statusIndicator, fanState ? styles.onIndicator : styles.offIndicator]}
            onPress={toggleFan}>
            <Text style={styles.statusText}>{fanState ? 'Encendido' : 'Apagado'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.controlCard}>
          <Text style={styles.controlTitle}>Riego</Text>
          <TouchableOpacity
            style={[styles.statusIndicator, wateringState ? styles.onIndicator : styles.offIndicator]}
            onPress={toggleWatering}>
            <Text style={styles.statusText}>{wateringState ? 'Activado' : 'Desactivado'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.actionButton, lightState ? styles.activeButton : styles.inactiveButton]}
          onPress={toggleLight}>
          <Text style={styles.buttonText}>
            {lightState ? 'Apagar Luz' : 'Encender Luz'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, fanState ? styles.activeButton : styles.inactiveButton]}
          onPress={toggleFan}>
          <Text style={styles.buttonText}>
            {fanState ? 'Apagar Ventilador' : 'Encender Ventilador'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, wateringState ? styles.activeButton : styles.inactiveButton]}
          onPress={toggleWatering}>
          <Text style={styles.buttonText}>
            {wateringState ? 'Detener Riego' : 'Iniciar Riego'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a202c',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f7fafc',
    textAlign: 'center',
    marginBottom: 50,
    letterSpacing: 1,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
    width: '100%',
  },
  controlCard: {
    width: 110,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d3748',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginHorizontal: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#4a5568',
  },
  controlTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e2e8f0',
    marginBottom: 15,
  },
  statusIndicator: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  onIndicator: {
    backgroundColor: '#38a169',
  },
  offIndicator: {
    backgroundColor: '#e53e3e',
  },
  statusText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  activeButton: {
    backgroundColor: '#319795',
  },
  inactiveButton: {
    backgroundColor: '#4a5568',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default ControlsScreen;

