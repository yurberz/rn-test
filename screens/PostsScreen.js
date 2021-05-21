import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import postsOperations from "../redux/operations/postsOperations";
import postsSelector from "../redux/selectors/postsSelector";
import filter from "../utils/filter";

import Input from "../components/shared/Input";
import Post from "../components/Post";

import styles from "../assets/styles/styles";

const PostsScreen = ({ route, navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector(postsSelector.getPosts);

  const id = route.params.userId;
  const author = route.params.name;

  const posts = filter(data, inputValue);

  const keyboardShow = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          style={{ ...styles.avatarText, marginLeft: 10, color: "#6FCF97" }}
        >{`${author}'s Posts`}</Text>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(postsOperations.getPostsOperation(id));

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
          data={posts}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={(item) => item.id.toString()}
          style={{ paddingTop: 2, marginTop: 9 }}
        />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostsScreen;
