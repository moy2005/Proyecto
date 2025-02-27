import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';

const RegisterScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');

  const handleRegister = () => {
    Alert.alert("Registro", "te has registrado correctamente");
  };

  return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Registro</Text>

        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre</Text>
            <InputField placeholder="Ingrese su nombre" value={nombre} onChangeText={setNombre} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Apellido</Text>
            <InputField placeholder="Ingrese su apellido" value={apellido} onChangeText={setApellido} />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo electrónico</Text>
            <InputField placeholder="Ingrese su correo" value={email} onChangeText={setEmail} keyboardType="email-address" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Número de teléfono</Text>
            <InputField placeholder="Ingrese su número" value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <InputField placeholder="Ingrese su contraseña" value={password} onChangeText={setPassword} secureTextEntry />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar contraseña</Text>
            <InputField placeholder="Confirme su contraseña" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ciudad</Text>
          <InputField placeholder="Ingrese su ciudad" value={ciudad} onChangeText={setCiudad} />
        </View>

        <TouchableOpacity style={styles.termsContainer}>
          <Text style={styles.termsText}>Acepto los términos y condiciones</Text>
        </TouchableOpacity>

        <Button title="Registrarse" onPress={handleRegister} />

        <TouchableOpacity>
          <Text style={styles.loginText}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    paddingHorizontal: 20, 
    backgroundColor: '#2d3748', 
    paddingBottom: 20, 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  inputGroup: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom: 15
  },
  inputContainer: { 
    width: '48%', 
    marginBottom: 15 
  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginBottom: 5 
  },
  termsContainer: { 
    marginBottom: 20, 
    alignItems: 'center' 
  },
  termsText: { 
    color: '#28a745', 
    fontSize: 14 
  },
  loginText: { 
    color: '#28a745', 
    textAlign: 'center', 
    fontWeight: 'bold' 
  }
});

export default RegisterScreen;
