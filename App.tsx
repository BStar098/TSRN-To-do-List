import {
  Alert,
  FlatList,
  NativeSyntheticEvent,
  StatusBar,
  TextInputChangeEventData,
} from "react-native";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { FunctionComponent, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import ListItem from "./components/ListItem";
import EditTaskModal from "./components/EditTaskModal";

const App: FunctionComponent = () => {
  const [textValue, setTextValue] = useState<string>("");
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [modalState, setModalState] = useState<boolean>(false);

  const onChangeHandler = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setTextValue(event.nativeEvent.text);
  };
  const modalOpenHandler: CallableFunction = () => setModalState(true);
  const modalCloseHandler: CallableFunction = () => setModalState(false);
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
      <EditTaskModal modalState={modalState} modalCloseHandler={modalCloseHandler}/>
      <StatusBar backgroundColor={"#ffc8dd"} />
      <View style={styles.inputContainer}>
        <TextInput
          onChange={onChangeHandler}
          value={textValue}
          style={styles.textInput}
        />
        <Pressable style={styles.addIconContainer} onPress={addTask}>
          <Icon style={styles.addIcon} name="plus" />
        </Pressable>
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasksList}
          renderItem={(item) => (
            <ListItem
              id={item.item}
              text={item.item}
              deleteTask={deleteTask}
              modalOpenHandler={modalOpenHandler}
            />
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
    backgroundColor: "#ffc8dd",
    padding: "5%",
  },
  inputContainer: {
    flexDirection: "row",

    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "300",
    padding: "1%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  addIconContainer: {
    backgroundColor: "#bde0fe",
    marginLeft: "2%",
    padding: "1%",
    borderRadius: 5,
    elevation: 2,
  },
  addIcon: {
    fontSize: 30,
  },
  tasksContainer: { flex: 1, marginTop: "5%" },
});
