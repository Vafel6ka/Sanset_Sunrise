import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../colors/colors";

const Main = () => {
  const [state, newState] = useState("");
  const [results, newResults] = useState("");

  async function letStart() {
    geoFindMe().then(() => getSunRiseSunSet());
  }

  function getSunRiseSunSet() {
    const axios = require("axios");
    let long = state.longitude;
    let lat = state.latitude;
    axios
      .get(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=2021-04-11
      `
      )
      .then(function (response) {
        newResults({
          ...response.data.results,
        });
        console.log(results);
      })
      .catch(function (error) {
        // handle error
      });
  }

  async function geoFindMe() {
    function success(pos) {
      let crd = pos.coords;
      newState({
        ...state,
        ...{ latitude: crd.latitude },
        ...{ longitude: crd.longitude },
      });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <View style={styles.container}>
      <Text> Sunset : {results.sunrise} </Text>
      <Text> Sunrise : {results.sunset}</Text>
      <Button title="Get your corrent geolocation" onPress={letStart} />
      {/* <Button title="Clear" onPress={Clear} /> */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryMainBackGround,
  },
});
