import React from "react";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Main from "./components/Main";
import store from "./redux/store";

const App = () => {
  const [isReady] = useFonts({
    "DMMono-Medium": require("./assets/fonts/DMMono-Medium.ttf"),
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  });

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
