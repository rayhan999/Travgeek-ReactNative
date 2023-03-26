import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import TourEventList from "./components/TourEventList";
import Header from "./components/Header";

export default function App() {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Header />
      <TourEventList />
      <StatusBar style="auto" />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    alignItems: "center",
    justifyContent: "center",
  },
});
