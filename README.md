# Sanset_Sunrise

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../styleConstant/Colors";
import Geolocation from "@react-native-community/geolocation";

const Main = () => {
  const [results, newResults] = useState("");

  function getSunRiseSunSet(latitude, longitude) {
    const axios = require("axios");
    axios
      .get(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today
      `
      )
      .then(function (response) {
        newResults({
          ...response.data.results,
        });
      })
      .catch(function (error) {
        // handle error
      });
  }

  function geoFindMe() {
    function success(pos) {
      let crd = pos.coords;
      let latitude = crd.latitude;
      let longitude = crd.longitude;
      console.log(`latitude:${latitude}`);
      console.log(`longitude:${longitude}`)
      getSunRiseSunSet(latitude, longitude);
      }
    

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    if (Geolocation) {
        Geolocation.getCurrentPosition(success, error);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
    
  }

  return (
    <View style={styles.container}>
      <Text> Sunset : {results.sunset} </Text>
      <Text> Sunrise : {results.sunrise}</Text>
      <Button title="Get your corrent geolocation" onPress={geoFindMe} />
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
