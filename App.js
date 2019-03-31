import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Alert,
  FlatList,
  Component,
  StatusBar,
  ScrollView
} from "react-native";
import { Icon } from "native-base";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
            marginBottom: 5
          }}
        >
          <Text style={styles.title}>coverbase</Text>
        </View>
        <View
          style={{
            width: windowWidth,
            alignItems: "center"
          }}
        >
          <Image
            source={{ uri: "https://source.unsplash.com/random/512x512" }}
            style={styles.imageView}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e"
  },
  title: {
    color: "#ffa801",
    fontSize: 36,
    fontFamily: "Bradley Hand"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    height: windowWidth / 1.25,
    width: windowWidth / 1.25,
    backgroundColor: "#485460",
    borderRadius: 20
  }
});
