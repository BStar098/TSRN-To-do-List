import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

type AppProps = {
  id: string;
  text: string;
  deleteTask: CallableFunction;
};

const ListItem = ({ text, id, deleteTask }: AppProps) => {
  return (
    <View style={styles.taskTextContainer}>
      <Text style={styles.taskText}>{text}</Text>
      <Pressable
        android_ripple={{ color: "rgba(255, 116, 116, 0.8)" }}
        onPress={() => {
          deleteTask(id);
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Icon style={styles.deleteIcon} name="trash" />
      </Pressable>
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
  deleteIcon: {
    fontSize: 20,
    color: "rgba(255, 116, 116, 0.8)",
  },
  pressedItem: { opacity: 0.5 },
});
export default ListItem;
