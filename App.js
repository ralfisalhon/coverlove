import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.albumView}>
          <Image source={{ uri: "null" }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020"
  },
  text: {
    color: "#FFF",
    fontFamily: "Avenir Next",
    fontSize: 24
  },
  albumView: {
    height: windowWidth / 1.25,
    width: windowWidth / 1.25,
    backgroundColor: "#8645fb"
  }
});
