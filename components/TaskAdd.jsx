import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { addTask } from "../store/reducers/taskReducer";
import uuid from "react-native-uuid";

const TaskAdd = () => {
  const [text, onChangeText] = useState("");
  const dispatch = useDispatch();
  const addTaskHandler = () => {
    if (!text) {
      return;
    }
    dispatch(addTask({ id: uuid.v1(), title: text, checked: false }));
    onChangeText("");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addBtnWrapper}
        onPress={() => {
          Keyboard.dismiss();
          addTaskHandler();
        }}
      >
        <Icon name="plus" color="#98A2B3" size={32} />
      </TouchableOpacity>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Add Task"
          placeholderTextColor="#ABB6C8"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#F9F9FB",
    borderRadius: 16,
  },
  addBtnWrapper: {
    marginRight: 16,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    // backgroundColor: "red",
    fontSize: 16,
    height: 32,
    fontFamily: "InterRegular",
    paddingHorizontal: 10,
  },
});

export default TaskAdd;
