import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import TourEventItem from "../TourEventItem";
import styles from "./styles";
import tourEvents from "./tourEvents";

const TourEventList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tourEvents}
        renderItem={({ item }) => <TourEventItem tourEvents={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default TourEventList;
