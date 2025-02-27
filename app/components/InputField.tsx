import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}

const InputField: React.FC<InputProps> = (props) => {
  return <TextInput style={styles.input} placeholderTextColor="#a0aec0" {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    padding: 15,
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 20,
  },
});

export default InputField;

