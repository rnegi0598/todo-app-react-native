import { StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

const TodoScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  console.log(tasks);

  return (
    <View >
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    
})

export default TodoScreen;
