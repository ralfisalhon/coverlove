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
  ScrollView,
  TextInput,
  SafeAreaView
} from "react-native";
import { Icon } from "native-base";
import Slider from "react-native-slider";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorIndex: 0,
      colors: [
        "#8745fb",
        "#ab55fa",
        "#448af8",
        "#2ef7e6",
        "#56fa5a",
        "#54825c",
        "#52fb9b",
        "#feda4b",
        "#f54b1e",
        "#fa714b",
        "#fed281",
        "#d2d2d2",
        "#eee",
        "#111"
      ],
      textAlign: "center",
      value: 0.35
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderAlbum()}
        <View style={styles.settingsContainer}>
          <View style={styles.leftAlign}>
            {this.renderIcons()}
            {this.renderTextSettings()}
          </View>
        </View>
      </SafeAreaView>
    );
  }

  renderHeader() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.title}>coverbase</Text>
      </View>
    );
  }

  renderAlbum() {
    return (
      <View style={styles.imageView}>
        <View
          style={{
            backgroundColor: this.state.colors[this.state.colorIndex],
            borderRadius: 20
          }}
        >
          <Image
            source={{ uri: "https://source.unsplash.com/random/300x300" }}
            style={[styles.image, { opacity: 1 - this.state.value }]}
          />
        </View>
        <View
          style={[
            styles.textView,
            {
              alignItems:
                this.state.textAlign == "center"
                  ? "center"
                  : this.state.textAlign == "left"
                  ? "flex-start"
                  : "flex-end"
            }
          ]}
        >
          <TextInput
            multiline
            style={[styles.overlayText, { textAlign: this.state.textAlign }]}
            defaultValue={"My Chill Mix"}
            maxLength={32}
          />
        </View>
      </View>
    );
  }

  renderIcons() {
    return (
      <View style={styles.icons}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.setState({ textAlign: "left" })}
        >
          <Icon name={"align-left"} type={"Foundation"} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.setState({ textAlign: "center" })}
        >
          <Icon name={"align-center"} type={"Foundation"} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.setState({ textAlign: "right" })}
        >
          <Icon name={"align-right"} type={"Foundation"} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }

  renderColor = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.setState({ colorIndex: index })}
        style={{
          borderWidth: 0.5,
          borderColor: "#555",
          width: 64,
          height: 64,
          borderRadius: 10,
          marginHorizontal: 2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: this.state.colors[index]
        }}
      >
        <Text />
      </TouchableOpacity>
    );
  };

  renderTextSettings() {
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={styles.text}>Pick a color</Text>
        <FlatList
          horizontal
          extraData={this.state.refresh}
          ref={ref => {
            this.flatListRef = ref;
          }}
          showsHorizontalScrollIndicator={false}
          data={this.state.colors}
          renderItem={this.renderColor}
          keyExtractor={(item, index) => index.toString()}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={styles.subtext}>Intensity</Text>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Slider
              value={this.state.value}
              minimumValue={0.25}
              maximumValue={0.75}
              onValueChange={value => this.setState({ value })}
              style={customStyles8.container}
              trackStyle={customStyles8.track}
              thumbStyle={customStyles8.thumb}
              minimumTrackTintColor="#31a4db"
              thumbTouchSize={{ width: 50, height: 40 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  titleView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10
  },
  title: {
    color: "#FF530D",
    fontSize: 32,
    fontFamily: "Bradley Hand"
  },
  imageView: {
    width: windowWidth,
    alignItems: "center"
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: windowWidth / 1.2,
    width: windowWidth / 1.2,
    backgroundColor: "#485460",
    borderRadius: 20
  },
  textView: { width: windowWidth / 1.2 - 25, justifyContent: "center" },
  overlayText: {
    color: "white",
    marginTop: windowWidth / -1.2,
    fontFamily: "Avenir Next",
    fontSize: 32,
    fontWeight: "500"
  },
  icons: {
    flexDirection: "row",
    marginTop: 12
  },
  icon: {
    fontSize: 35,
    color: "#d2dae2",
    opacity: 1,
    marginRight: 12
  },
  text: {
    color: "white",
    fontFamily: "Avenir Next",
    fontSize: 24,
    fontWeight: "400"
  },
  subtext: {
    color: "white",
    fontFamily: "Avenir Next",
    fontSize: 16,
    fontWeight: "300"
  },
  settingsContainer: {
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  leftAlign: {
    width: windowWidth / 1.2
  }
});

var customStyles8 = StyleSheet.create({
  container: {
    height: 30
  },
  track: {
    height: 4,
    backgroundColor: "lightgray"
  },
  thumb: {
    width: 12,
    height: 12,
    backgroundColor: "#31a4db",
    shadowColor: "#31a4db",
    borderRadius: 10 / 2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1
  }
});
