import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width, height: height }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#7ed957",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#7ed957",
    fontWeight: "bold",
    fontSize: 20,
  },
});