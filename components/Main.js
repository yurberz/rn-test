import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import authorsOperations from "../redux/operations/authorsOperations";
import loadingSelector from "../redux/selectors/loadingSelector";

import AuthorsScreen from "../screens/AuthorsScreen";
import PostsScreen from "../screens/PostsScreen";
import Spin from "../components/shared/Spin";

import styles from "../assets/styles/styles";

const MainStack = createStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector.getLoading);

  useEffect(() => {
    dispatch(authorsOperations.getAuthorsOperation());
  }, []);

  return (
    <NavigationContainer>
      {/* {isLoading && <Spin />} */}
      <MainStack.Navigator
        screenOptions={{
          headerTitle: false,
          headerStyle: {
            shadowColor: "transparent",
          },
        }}
      >
        <MainStack.Screen
          name="Authors"
          options={{
            headerLeft: () => (
              <Text
                style={{
                  ...styles.avatarText,
                  marginLeft: 10,
                  color: "#6FCF97",
                }}
              >
                Authors
              </Text>
            ),
          }}
          component={AuthorsScreen}
        />
        <MainStack.Screen name="Posts" component={PostsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
