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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TalkingBallon from "../../components/TalkingBallon/TalkingBallon";

import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useState } from "react";

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
        <View style={styles.questionCard}>
          <Image
            style={styles.image}
            source={require("../../../assets/character2.png")}
          />
          <TalkingBallon />
        </View>
      </View>

      <WordList _words={words}>
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
  <View style={styles.root}>
    <View>
      <View style={styles.container2}>
        <Text style={styles.text}>{word}</Text>
      </View>
      <View style={styles.shadow} />
    </View>
  </View>
);

const Footer = () => {
  const insets = useSafeAreaInsets();
  const correctAnswer = ["Elbise", "çok", "küçük"];
  const wordArrayList = useSelector((state) => state.wordList);
  const [check, SetCheck] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);

  const control = () => {
    let status = false;
    if (wordArrayList) {
      if (correctAnswer.length !== wordArrayList.length) {
        status = false;
      } else {
        for (let x = 0; x < correctAnswer.length; x++) {
          if (
            correctAnswer[x].toLocaleLowerCase() !==
            wordArrayList[x].toLocaleLowerCase()
          ) {
            status = false;
            break;
          } else {
            status = true;
          }
        }
      }
    }
    if (status) {
      console.log("doğru :", wordArrayList);
      setCheckStatus(true);
    } else {
      console.log("yanlış :", wordArrayList);
      setCheckStatus(false);
    }
  };

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
      <RectButton
        onPress={() => {
          control(), SetCheck(true);
        }}
        style={styles.button}
      >
        <Text style={styles.label}>Kontrol Et</Text>
      </RectButton>
      {check && checkStatus && (
        <View style={styles.controlContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="checkmark-circle-sharp" size={35} color="#59CB01" />
            <Text
              style={{
                marginStart: 10,
                fontSize: 25,
                color: "#59CB01",
                fontFamily: "Nunito_ExtraBold",
                flex: 1,
              }}
            >
              Aferin!
            </Text>
            <Ionicons name="share-outline" size={25} color="#59CB01" />
            <MaterialCommunityIcons
              name="message-reply-outline"
              size={25}
              color="#59CB01"
            />
            <MaterialIcons name="outlined-flag" size={30} color="#59CB01" />
          </View>
          <RectButton
            onPress={() => SetCheck(false)}
            style={[styles.button, { bottom: -30 }]}
          >
            <Text style={styles.label}>Devam Et</Text>
          </RectButton>
        </View>
      )}
      {check && !checkStatus && (
        <View style={styles.controlContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="close-circle" size={35} color="#ff4b4b" />
            <Text
              style={{
                marginStart: 10,
                fontSize: 25,
                color: "#ff4b4b",
                fontFamily: "Nunito_ExtraBold",
                flex: 1,
              }}
            >
              Doğru cevap:
            </Text>
            <Ionicons name="share-outline" size={25} color="#ff4b4b" />
            <MaterialCommunityIcons
              name="message-reply-outline"
              size={25}
              color="#ff4b4b"
            />
            <MaterialIcons name="outlined-flag" size={30} color="#ff4b4b" />
          </View>
          <Text
            style={{
              fontSize: 18,
              color: "#ff4b4b",
              fontFamily: "Nunito_Regular",
              flex: 1,
            }}
          >
            {correctAnswer.toString().split(",").join(" ")}
          </Text>
          <RectButton
            onPress={() => SetCheck(false)}
            style={[styles.button, { bottom: -8, backgroundColor: "#ff4b4b" }]}
          >
            <Text style={styles.label}>Tamam</Text>
          </RectButton>
        </View>
      )}
    </View>
  );
};
