import React from "react";
import { View, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../../assets/styles/styles";

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name="ios-search"
        size={20}
        color="#382A2C"
        style={{ padding: 10 }}
      />
      <TextInput
        placeholder="Search"
        style={[styles.input, styles.title]}
        {...props}
      />
    </View>
  );
};

export default Input;
