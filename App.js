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
const randomAddition = Math.floor(Math.random() * Math.floor(100));

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorIndex: 14,
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
        "#111"
      ],
      textAlign: "center",
      value: 0.35,
      imgURL: "https://picsum.photos/512/?random",
      dimensions: 300,
      loading: true,
      images: new Array(50),
      name: "My Chill Mix",
      fontSize: 32,
    };
  }

  randomPicture() {
    this.setState(
      {
        loading: true
      },
      () =>
        this.setState({
          imgURL:
            "https://picsum.photos/512/?image=" +
            Math.floor(Math.random() * Math.floor(1000))
        })
    );
  }

  newPicture(index) {
    // Alert.alert(index * 10 + this.state.randomAddition);
    if (
      this.state.imgURL ==
      "https://picsum.photos/512/?image=" + (index * 10 + randomAddition)
    ) {
      return;
    }
    this.setState(
      {
        loading: true
      },
      () =>
        this.setState({
          imgURL:
            "https://picsum.photos/512/?image=" + (index * 10 + randomAddition)
        })
    );
  }

  increaseFont() {
      if (this.state.fontSize > 50) return;
      this.setState({fontSize: this.state.fontSize + 2});
  }

  decreaseFont() {
      if (this.state.fontSize < 20) return;
      this.setState({fontSize: this.state.fontSize - 2});
  }

  randomColor() {
    this.setState({ loading: false });
    var colorIndex = Math.floor(Math.random() * this.state.colors.length);

    if (colorIndex == this.state.colorIndex) {
      this.randomColor();
      return;
    }

    this.setState({
      colorIndex,
      value: (Math.floor(Math.random() * Math.floor(50)) + 25) / 100
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView bounces={true}>
          {this.renderHeader()}
          {this.renderAlbum()}
          <View style={styles.settingsContainer}>
            <View style={styles.spaceBetween}>
              {this.renderIcons()}
              {this.renderFonts()}
              {this.renderRandom()}
              {this.renderSave()}
            </View>
            <View style={{ width: windowWidth / 1.2 }}>
              {this.renderImagePicker()}
              {this.renderColorPicker()}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderHeader() {
    return (
      <View style={styles.titleView}>
        <Text style = {[styles.title, {color: "#fff"}]}>cover<Text style = {{color: "#faa719"}}>love</Text> <Text style = {{fontSize: 12}}>by Ralfi</Text> </Text>
      </View>
    );
  }

  renderRandom() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: 12,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 10,
            padding: 5,
            flexDirection: "row",
            paddingHorizontal: 10
          }}
          activeOpacity={0.5}
          onPress={() => this.randomPicture()}
        >
          <Icon
            name={"random"}
            type={"FontAwesome"}
            style={{
              fontSize: 22,
              color: "white"
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderFonts() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 7,
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 10,
            padding: 5,
            paddingHorizontal: 5,
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: -28
          }}
          activeOpacity={0.5}
          onPress={() => this.decreaseFont()}
        >
          <Icon
            name={"minus"}
            type={"Entypo"}
            style={{
              fontSize: 27,
              color: "white",
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: 0, height: 1},
              textShadowRadius: 1
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            padding: 5,
            paddingHorizontal: 5,
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: -5,
          }}
          activeOpacity={0.5}
          onPress={() => this.increaseFont()}
        >
          <Icon
            name={"plus"}
            type={"Entypo"}
            style={{
              fontSize: 27,
              color: "white",
              textShadowColor: 'rgba(0, 0, 0, 0.7)',
              textShadowOffset: {width: 0, height: 1},
              textShadowRadius: 1
            }}
          />
        </TouchableOpacity>

      </View>
    );
  }

  renderSave() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 12
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "white",
            backgroundColor: this.state.colors[this.state.colorIndex],
            borderRadius: 10,
            padding: 5,
            flexDirection: "row",
            paddingHorizontal: 10
          }}
          activeOpacity={0.5}
          onPress={() => Alert.alert("Saved to your library!")}
        >
          <Text style={[styles.subtext, {fontWeight: '500'}]}>Save</Text>
          <Icon
            name={"save"}
            type={"AntDesign"}
            style={{
              fontSize: 20,
              color: "white",
              marginLeft: 5,
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: {width: 0, height: 1},
              textShadowRadius: 1
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  updateName(name) {
      this.setState({name})
  }

  renderAlbum() {
    return (
      <View style={styles.imageView}>
        <View
          style={{
            borderRadius: 0,
            backgroundColor: this.state.colors[this.state.colorIndex]
          }}
        >
          <Image
            source={{ uri: this.state.imgURL }}
            style={[styles.image, { opacity: 1 - this.state.value }]}
            onLoad={() => this.randomColor()}
            onError={() => this.randomPicture()}
          />
        </View>
        <View
          style={[
            styles.textView,
            {
                justifyContent: 'center',
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
            value={ this.state.name }
            style={[styles.overlayText, { textAlign: this.state.textAlign, fontSize: this.state.fontSize}]}
            defaultValue={"My Chill Mix"}
            onChangeText={ (e) => this.updateName(e) }
            maxLength={32}
          />
          {this.state.loading ? (
            <View style={{ height: 20 }}>
              <Text style={styles.subtext}>Loading...</Text>
            </View>
          ) : null}
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

  renderImage = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.newPicture(index)}
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
        <Image
          source={{
            uri:
              "https://picsum.photos/128/?image=" +
              (index * 10 + randomAddition)
          }}
          style={styles.thumbImage}
        />
      </TouchableOpacity>
    );
  };

  renderColorPicker() {
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

  renderImagePicker() {
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={styles.text}>Pick an image</Text>
        <FlatList
          horizontal
          extraData={this.state.refresh}
          ref={ref => {
            this.flatListRef = ref;
          }}
          showsHorizontalScrollIndicator={false}
          data={this.state.images}
          renderItem={this.renderImage}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

var customStyles8 = StyleSheet.create({
  container: {
    height: 30,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
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
    fontSize: 36,
    fontFamily: "Bradley Hand"
  },
  imageView: {
    width: windowWidth,
    alignItems: "center",
    borderRadius: 0
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: windowWidth / 1.2,
    width: windowWidth / 1.2,
    backgroundColor: "#485460",
    borderRadius: 0
  },
  thumbImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    backgroundColor: "#485460",
    borderRadius: 10,
    opacity: 1
  },
  textView: {
    width: windowWidth / 1.2 - 25,
    justifyContent: "center"
  },
  overlayText: {
    color: "white",
    marginTop: windowWidth / -1.2,
    fontFamily: "Avenir Next",
    fontWeight: "500",
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1
  },
  icons: {
    flexDirection: "row",
    marginTop: 12,
    paddingTop: 3,
  },
  icon: {
    fontSize: 32,
    color: "#d2dae2",
    opacity: 1,
    marginRight: 8
  },
  text: {
    color: "white",
    fontFamily: "Avenir Next",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 2
  },
  subtext: {
    color: "white",
    fontFamily: "Avenir Next",
    fontSize: 16,
    fontWeight: "300",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1
  },
  settingsContainer: {
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  spaceBetween: {
    width: windowWidth / 1.2,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});
