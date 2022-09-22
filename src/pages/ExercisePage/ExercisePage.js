import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import styles from "./ExercisePage.styles";
import Svg, { G, Path, Circle } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import WordList from "../../components/WordList/WordList";
import * as Progress from "react-native-progress";
import { RectButton } from "react-native-gesture-handler";

const ExercisePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <Cross navigation={navigation} />

          <Progress.Bar
            progress={0.1}
            width={width - 50}
            height={(width * 11) / 135}
            color={"#58CC00"}
            fill={"#E4E4E4"}
            borderColor={"#E4E4E4"}
            animated={true}
            borderRadius={25}
          />

          <Heart />
          <Text style={styles.heartText}>5</Text>
        </View>

        <Text style={styles.title}>Bu cümleyi çevir</Text>
        <Image
          style={styles.image}
          source={require("../../../assets/character.png")}
        />
      </View>

      <WordList>
        {words.map((word) => (
          <Word key={word.id} {...word} />
        ))}
      </WordList>
      <Footer />
    </View>
  );
};

export default ExercisePage;

const Cross = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Svg width={23} height={23} viewBox="0 0 14 14" fill="none">
        <Path
          d="M13 1L1 13M1 1l12 12"
          stroke="#AFAFAE"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const width = Dimensions.get("window").width - 16 * 4 - 24 - 35;

const Heart = () => {
  return (
    <Svg width={30} height={30} viewBox="0 0 24 22" fill="none">
      <Path
        d="M20.84 3.61a5.5 5.5 0 00-7.78 0L12 4.67l-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06L12 20.23l7.78-7.78 1.06-1.06a5.501 5.501 0 000-7.78v0z"
        fill="#FC4747"
        stroke="#FB1E20"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={7} cy={7} r={3} fill="#FF7977" />
    </Svg>
  );
};

const words = [
  { id: 1, word: "şehirde" },
  { id: 8, word: "görmek" },
  { id: 2, word: "tarih" },
  { id: 7, word: "fikrim" },
  { id: 6, word: "küçük" },
  { id: 9, word: "çok" },
  { id: 5, word: "Elbise" },
];

const Word = ({ word }) => (
  <View style={styles2.root}>
    <View>
      <View style={styles2.container}>
        <Text style={styles2.text}>{word}</Text>
      </View>
      <View style={styles2.shadow} />
    </View>
  </View>
);

const styles2 = StyleSheet.create({
  root: {
    padding: 4,
  },
  container: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E6E8",
    backgroundColor: "white",
    height: 55 - 8,
  },
  text: {
    fontFamily: "Nunito_Regular",
    fontSize: 19,
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    borderBottomWidth: 3,
    borderColor: "#E8E6E8",
    top: 4,
  },
});

const Footer = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        alignItems: "center",
        margin: 16,
      }}
    >
      <View
        style={{
          backgroundColor: "#1B9A00",
          borderRadius: 16,
          height: 50,
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <RectButton style={styles3.button}>
        <Text style={styles3.label}>Kontrol Et</Text>
      </RectButton>
    </View>
  );
};

import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles3 = StyleSheet.create({
  button: {
    backgroundColor: "#59CB01",
    width: "100%",
    height: 45,
    borderRadius: 16,
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Nunito_Bold",
  },
});
