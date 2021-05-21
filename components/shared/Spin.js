import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "../../assets/styles/styles";

const Spin = () => {
  return (
    <View style={styles.spinContainer}>
      <ActivityIndicator size="small" color="#6FCF97" />
    </View>
  );
};

export default Spin;
