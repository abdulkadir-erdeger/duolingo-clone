import { View, Text } from "react-native";
import React from "react";
import styles from "./TalkingBallon.styles";
import { SpeakerWaveIcon } from "react-native-heroicons/solid";

const sentence = ["The", "dress", "is", "very", "small", "."];

const TalkingBallon = () => {
  return (
    <View style={styles.dialog}>
      <View style={styles.leftPoint}>
        <View style={styles.innerLeftPoint}></View>
      </View>

      <Text>
        <SpeakerWaveIcon fill="#1cb0f6" color="#1cb0f6" size={22} />
        {sentence.map((item, index) => (
          <>
            <Text key={item + index}> </Text>
            <Text style={styles.text} key={index}>
              {item}
            </Text>
          </>
        ))}
      </Text>
    </View>
  );
};

export default TalkingBallon;
