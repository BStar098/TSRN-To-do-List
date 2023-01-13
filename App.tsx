import {
  Alert,
  FlatList,
  NativeSyntheticEvent,
  StatusBar,
  TextInputChangeEventData,
} from "react-native";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { FunctionComponent, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import ListItem from "./components/ListItem";

const App: FunctionComponent = () => {
  const [textValue, setTextValue] = useState<string>("");
  const [tasksList, setTasksList] = useState<string[]>([]);

  const onChangeHandler = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setTextValue(event.nativeEvent.text);
  };

  const addTask: VoidFunction = (): void => {
    if (!textValue) {
      return Alert.alert("New Task", "Task cannot be empty!");
    } else if (tasksList.includes(textValue)) {
      return Alert.alert("New Task", "Tasks cannot be repeated!");
    }
    setTasksList((tasksList) => [...tasksList, textValue]);
    setTextValue("");
  };
  const deleteTask: CallableFunction = (taskName: string): void => {
    setTasksList((taskList) =>
      taskList.filter((taskElement) => taskElement != taskName)
    );
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor={"#fff"} />
      <View style={styles.inputContainer}>
        <TextInput
          onChange={onChangeHandler}
          value={textValue}
          style={styles.textInput}
        />
        <Pressable onPress={addTask}>
          <Icon style={styles.addIcon} name="plus-square" />
        </Pressable>
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasksList}
          renderItem={(item) => (
            <ListItem id={item.item} text={item.item} deleteTask={deleteTask} />
          )}
        />
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: "5%",
  },
  inputContainer: {
    flexDirection: "row",

    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: "1%",
    borderWidth: 2,
    borderRadius: 5,
  },
  addIcon: { paddingLeft: "3%", fontSize: 40 },
  tasksContainer: { flex: 1 },
});
