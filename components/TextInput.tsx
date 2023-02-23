import {
  View,
  Pressable,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
  TextInput,
} from "react-native";
import { useState, useRef } from "react";
import Icon from "react-native-vector-icons/Feather";

type TaskInputProps = {
  tasksList: Array<string>;
  setTasksList: CallableFunction;
};

const TaskInput = ({ tasksList, setTasksList }: TaskInputProps) => {
  const inputRef = useRef<any>(null);
  const [textValue, setTextValue] = useState<string>("");
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
    setTasksList((tasksList: Array<string>) => [...tasksList, textValue]);
    setTextValue("");
    inputRef.current.blur();
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={inputRef}
        onChange={onChangeHandler}
        value={textValue}
        style={styles.textInput}
      />
      <Pressable style={styles.addIconContainer} onPress={addTask}>
        <Icon style={styles.addIcon} name="plus" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default TaskInput;
