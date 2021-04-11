import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../colors/colors";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Footer! There will be some text </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryFooterBackGround,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
