import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const TourEventItem = (props) => {
  const { name, tagline, image,location } = props.tourEvents;

  return (
    <View style={styles.tourEventsContainer}>
      <ImageBackground source={{ uri: image }} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.subtitle}>{tagline} </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Book Now"}
          onPress={() => {
            console.warn("Book Now pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Add To Favourites"}
          onPress={() => {
            console.warn("Add To Favourites pressed");
          }}
        />
      </View>
    </View>
  );
};

export default TourEventItem;
