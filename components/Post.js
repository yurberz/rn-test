import React from "react";
import { View, Text } from "react-native";

import styles from "../assets/styles/styles";

const Post = ({ title, body }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <View style={styles.postContainer}>
      <View>
        <Text
          style={{
            ...styles.title,
            marginBottom: 10,
          }}
        >
          {capitalize(title)}
        </Text>
        <Text style={styles.text}>{body}</Text>
      </View>
    </View>
  );
};

export default Post;
