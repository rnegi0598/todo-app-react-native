import { StyleSheet, Text, View } from "react-native";
import TaskDetails from "../components/TaskDetails";
import TaskList from "../components/TaskList";
const TodoScreen = () => {
  

  return (
    <View style={styles.container}>
      <TaskDetails />
      <TaskList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 17,
    
  },
});

export default TodoScreen;
