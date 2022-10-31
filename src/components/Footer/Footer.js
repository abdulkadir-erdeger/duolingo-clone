import { View, Text, StyleSheet } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RectButton } from "react-native-gesture-handler";
import styles from "./Footer.styles";

const Footer = ({ correctAnswer, checking }) => {
  const insets = useSafeAreaInsets();
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
      // console.log("doğru :", wordArrayList);
      setCheckStatus(true);
    } else {
      //console.log("yanlış :", wordArrayList);
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
            onPress={() => {
              SetCheck(false), checking();
            }}
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
            onPress={() => {
              SetCheck(false), checking();
            }}
            style={[styles.button, { bottom: -8, backgroundColor: "#ff4b4b" }]}
          >
            <Text style={styles.label}>Tamam</Text>
          </RectButton>
        </View>
      )}
    </View>
  );
};

export default Footer;
