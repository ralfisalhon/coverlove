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
            marginTop: 25
          }}
        >
          <Text style={styles.title}>coverbase</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e"
    // backgroundColor: "white"
  },
  title: {
    color: "#ffa801",
    fontSize: 36,
    fontFamily: "Bradley Hand"
  }
});
