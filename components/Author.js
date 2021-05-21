import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../assets/styles/styles";

const Author = ({ name, email, handleSelect }) => {
  const fullName = name;

  let initials = fullName?.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();

  return (
    <View style={styles.authorContainer}>
      <View style={styles.authorAvatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <View style={styles.authorInfo}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
      <TouchableOpacity
        style={styles.authorPosts}
        onPress={handleSelect}
        activeOpacity={0.8}
      >
        <Text style={{ ...styles.title, marginRight: 3 }}>posts</Text>
        <Ionicons name="ios-chevron-forward" size={20} color="#6FCF97" />
      </TouchableOpacity>
    </View>
  );
};

export default Author;
