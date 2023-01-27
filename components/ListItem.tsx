import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

type AppProps = {
  id: string;
  text: string;
  deleteTask: CallableFunction;
  modalOpenHandler: CallableFunction;
};

const ListItem = ({ text, id, deleteTask, modalOpenHandler }: AppProps) => {
  return (
    <View style={styles.taskTextContainer}>
      <Text style={styles.taskText}>{text}</Text>
      <View style={styles.taskItemIconsContainer}>
        <Pressable
          android_ripple={{ color: "#fff" }}
          onPress={() => {
            modalOpenHandler()
          }}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Icon style={styles.editIcon} name="pen" />
        </Pressable>

        <Pressable
          android_ripple={{ color: "#fff" }}
          onPress={() => {
            deleteTask(id);
          }}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Icon style={styles.deleteIcon} name="trash" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskTextContainer: {
    padding: "3%",
    elevation: 2,
    borderRadius: 5,
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  taskText: { fontSize: 16, fontWeight: "300" },
  taskItemIconsContainer: { flexDirection: "row" },
  editIcon: { fontSize: 20, color: "#bde0fe" },
  deleteIcon: {
    fontSize: 20,
    color: "rgba(255, 116, 116, 0.8)",
    paddingLeft: "3%",
  },
  pressedItem: { opacity: 0.5 },
});
export default ListItem;
