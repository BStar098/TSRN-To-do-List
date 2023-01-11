import React, { FC, FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

type AppProps = {
  text: string;
};

const ListItem = ({ text }: AppProps) => {
  return (
    <View style={styles.taskTextContainer}>
      <Text style={styles.taskText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskTextContainer: {
    backgroundColor: "purple",
    padding: "2%",
    borderRadius: 10,
    marginTop:'2%'
  },
  taskText: { fontSize: 16, color: "white" },
});
export default ListItem;
