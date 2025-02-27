import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  style?: ViewStyle;
  fullWidth?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  type = "primary", 
  size = "medium", 
  style,
  fullWidth = false
}) => {
 
  const buttonStyle: ViewStyle[] = [styles.button];
  
  if (type === "secondary") {
    buttonStyle.push(styles.buttonSecondary);
  }
  

  if (size === "small") {
    buttonStyle.push(styles.buttonSmall);
  } else if (size === "large") {
    buttonStyle.push(styles.buttonLarge);
  }
  

  if (fullWidth) {
    buttonStyle.push(styles.buttonFullWidth);
  }
  
 
  if (style) {
    buttonStyle.push(style);
  }
  
  
  const textStyle: TextStyle[] = [styles.buttonText];
  
  if (type === "secondary") {
    textStyle.push(styles.buttonTextSecondary);
  }
  
  
  if (size === "small") {
    textStyle.push(styles.buttonTextSmall);
  } else if (size === "large") {
    textStyle.push(styles.buttonTextLarge);
  }
  
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#28a745",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#28a745",
  },
  buttonSmall: {
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonLarge: {
    padding: 18,
    borderRadius: 12,
  },
  buttonFullWidth: {
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "#28a745",
  },
  buttonTextSmall: {
    fontSize: 14,
  },
  buttonTextLarge: {
    fontSize: 18,
  },
});

export default CustomButton;