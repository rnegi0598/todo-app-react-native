import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import TaskAdd from "./TaskAdd";

const EmptyListMessage = () => {
  return (
    // Flat List Item
    <Text style={styles.emptyListStyle}>No Data Found</Text>
  );
};

const TaskList = () => {
  
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <View style={styles.container}>
      {/* task header  */}

      <View style={styles.header}>
        <Text style={styles.headerText}>Task List</Text>
        <View style={styles.deleteWrapper}>
          <Icon name="delete" size={20} color="red"  />
        </View>
      </View>

      {/* task display */}

      <View style={styles.taskList}>
        <FlatList
          scrollEnabled={true}
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem task={[item.title, item.checked]} />
          )}
          keyExtractor={(item) => item.id}
          
          ListEmptyComponent={EmptyListMessage}
        />
      </View>

      {/*task add  */}
      <TaskAdd />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    marginBottom: 56,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#5D6B98",
    fontWeight: 500,
    fontSize: 14,
    fontFamily: "InterRegular",
  },
  taskList: {
    flex: 1,
    marginTop: 16,
  },
  emptyListStyle: {},
});

export default TaskList;
