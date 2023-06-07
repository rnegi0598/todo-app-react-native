import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import TodoScreen from "./screens/TodoScreen";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
