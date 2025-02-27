import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert("Inicio de sesión", "has iniciado sesión correctamente por ejemplo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico</Text>
        <InputField 
          placeholder="Ingrese su correo" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <InputField 
          placeholder="Ingrese su contraseña" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry 
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Button title="Iniciar Sesión" onPress={handleLogin} />

      <TouchableOpacity>
        <Text style={styles.register}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 30, backgroundColor: '#2d3748' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 20 },
  inputContainer: { marginBottom: 15 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 },
  forgotPassword: { color: '#28a745', fontSize: 14, textAlign: 'right', marginBottom: 20 },
  register: { color: '#28a745', textAlign: 'center', fontWeight: 'bold' }
});

export default LoginScreen;
