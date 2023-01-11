import {
  FlatList,
  NativeSyntheticEvent,
  StatusBar,
  TextInputChangeEventData,
} from "react-native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { ChangeEvent, FunctionComponent, useState } from "react";
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
  const addTask = (): void => {
    setTasksList((tasksList) => [...tasksList, textValue]);
    setTextValue("");
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
      <FlatList
        data={tasksList}
        renderItem={(item) => <ListItem text={item.item} />}
      />
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
  tasksContainer: {},
});
