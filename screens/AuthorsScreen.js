import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  View,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import authorsSelector from "../redux/selectors/authorsSelector";
import filter from "../utils/filter";

import Input from "../components/shared/Input";
import Author from "../components/Author";

import styles from "../assets/styles/styles";

const AuthorsScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const data = useSelector(authorsSelector.getAuthors);

  const authors = filter(data, inputValue);

  const handleSelect = (id, name) => {
    navigation.navigate("Posts", {
      userId: id,
      name,
    });
  };

  const keyboardShow = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      keyboardDidHide.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.screenContainer}>
        <Input
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          onFocus={keyboardShow}
        />
        <FlatList
          data={authors}
          renderItem={({ item }) => (
            <Author
              {...item}
              handleSelect={handleSelect.bind(null, item.id, item.name)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthorsScreen;
