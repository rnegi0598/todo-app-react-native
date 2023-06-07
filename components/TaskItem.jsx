import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
const TaskItem = ({ task }) => {
  const [isSelected, setSelection] = useState(task[1]);

  return (
    <View style={styles.task}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color="#7F56D9"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.taskText}>{task[0]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    paddingVertical: 24,
    marginVertical: 16,
    backgroundColor: "#F9F9FB",
    borderRadius: 16,
  },
  checkbox: {
    marginHorizontal: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  taskText: {
    color: "#30374F",
    fontSize:16,
    fontWeight:500,
    fontFamily:'InterRegular',
    textTransform: 'capitalize',
  },
});

export default TaskItem;
