import {
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
  Button,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { useState } from "react";

type ModalPropTypes = {
  modalState: boolean;
  modalCloseHandler: CallableFunction;
  setTasksList: CallableFunction;
  taskToEdit: string;
};

function EditTaskModal({
  modalState,
  modalCloseHandler,
  setTasksList,
  taskToEdit,
}: ModalPropTypes) {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setInputValue(event.nativeEvent.text);
  };
  return (
    <Modal transparent={true} animationType="fade" visible={modalState}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <TextInput
            style={styles.textInput}
            placeholder="Type in.."
            onChange={onChangeHandler}
            value={inputValue}
          />
          <View style={styles.modalButtonera}>
            <Button
              title={"Accept"}
              onPress={() => {
                setTasksList((taskList: string[]) => {
                  taskList[taskList.indexOf(taskToEdit)] = inputValue;
                  return taskList;
                });
                setInputValue("");
                modalCloseHandler();
              }}
            />
            <Button
              title={"Cancel"}
              onPress={() => {
                modalCloseHandler();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(1,1,1,0.5)",
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: "8%",
  },
  textInput: { marginVertical: "3%", fontSize: 17 },
  modalButtonera: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
export default EditTaskModal;
