import { CameraRollAssetInfo, FlatList, StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import ListItem from "./components/ListItem";
import TaskInput from "./components/TextInput";
import EditTaskModal from "./components/EditTaskModal";

const Home: React.FC = () => {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [modalState, setModalState] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>("");

  const deleteTask: CallableFunction = (taskName: string): void => {
    setTasksList((taskList) =>
      taskList.filter((taskElement) => taskElement != taskName)
    );
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor={"#ffc8dd"} />
      <View style={styles.inputContainer}>
        <TaskInput tasksList={tasksList} setTasksList={setTasksList} />
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasksList}
          renderItem={(item) => (
            <ListItem
              id={item.item}
              text={item.item}
              deleteTask={deleteTask}
              modalOpenHandler={() => {
                setModalState(true);
                setTaskToEdit(item.item)
              }}
            />
          )}
        />
      </View>
      <EditTaskModal
        modalState={modalState}
        modalCloseHandler={() => {
          setModalState(false);
        }}
        taskToEdit={taskToEdit}
        setTasksList={setTasksList}
      />
    </View>
  );
};
export default Home;
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
  tasksContainer: { flex: 1, marginTop: "5%" },
});
