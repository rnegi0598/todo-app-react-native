import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import TaskAdd from "./TaskAdd";
import { removeAllTask } from "../store/reducers/taskReducer";
import emptyListImage from "../assets/images/emptyList.png";
const EmptyListMessage = () => {
  return (
    <View style={styles.emptyListStyle}>
      <Image style={styles.emptyListStyleImage} source={emptyListImage} />
    </View>
  );
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const removeAllHandler = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to remove all tasks?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            dispatch(removeAllTask());
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* task header  */}

      <View style={styles.header}>
        <Text style={styles.headerText}>Task List</Text>
        <TouchableOpacity
          style={styles.deleteWrapper}
          onPress={removeAllHandler}
        >
          <Icon name="delete" size={20} color="red" />
        </TouchableOpacity>
      </View>

      {/* task display */}

      <View style={styles.taskList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem task={[item.title, item.checked, item.id]} />
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
  emptyListStyle: {
    alignContent: "center",
  },
  emptyListStyleText: {},
  emptyListStyleImage: {
    alignSelf: "center",
  },
});

export default TaskList;
