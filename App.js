import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: 512,
      imgURL: "https://source.unsplash.com/random/512x512",
      colorIndex: 1,
      colors: [
        "#2ef7e6",
        "#448af8",
        "#56fa5a",
        "#feda4b",
        "#8745fb",
        "#52fb9b",
        "#fa714b",
        "#f54b1e",
        "#e0d0df",
        "#54825c",
        "#fed281",
        "#050505",
        "#d4d4d4",
        "#ab55fa"
      ]
    };
  }

  randomPicture() {
    this.setState(
      {
        dimensions: this.state.dimensions + 1
      },
      () =>
        this.setState({
          imgURL:
            "https://source.unsplash.com/random/" +
            this.state.dimensions +
            "x" +
            this.state.dimensions
        })
    );
  }

  randomColor() {
    var colorIndex = Math.floor(Math.random() * this.state.colors.length);

    if (colorIndex == this.state.colorIndex) {
      this.randomColor();
      return;
    }

    this.setState({ colorIndex });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{ backgroundColor: this.state.colors[this.state.colorIndex] }}
        >
          <ImageBackground
            source={{ uri: this.state.imgURL }}
            style={styles.imageView}
          >
            <Text style={styles.text}>Hello</Text>
          </ImageBackground>
        </View>
        <TouchableOpacity onPress={() => this.randomPicture()}>
          <Text style={styles.text}>Random Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.randomColor()}>
          <Text style={styles.text}>Random Color</Text>
        </TouchableOpacity>
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
  imageView: {
    height: windowWidth / 1.25,
    width: windowWidth / 1.25,
    opacity: 0.5
  }
});
