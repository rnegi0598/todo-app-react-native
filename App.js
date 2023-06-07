import { useCallback } from 'react';
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import TodoScreen from "./screens/TodoScreen";
import store from "./store/store";
import * as SplashScreen from "expo-splash-screen";
import * as Font from 'expo-font';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium as InterRegular,
  Inter_600SemiBold as InterBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();

export default function App() {


  let [fontsLoaded] = useFonts({
    InterRegular, InterBold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView} >
        <TodoScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
