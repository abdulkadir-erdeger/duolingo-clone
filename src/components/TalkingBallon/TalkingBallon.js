import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./TalkingBallon.styles";
import { SpeakerWaveIcon } from "react-native-heroicons/solid";

const TalkingBallon = ({ sentence }) => {
  const [x, setX] = useState(wordShredding(sentence));
  function wordShredding(text) {
    const sentences = text.split(" ");
    return sentences;
  }

  return (
    <View style={styles.dialog}>
      <View style={styles.leftPoint}>
        <View style={styles.innerLeftPoint}></View>
      </View>

      <Text>
        <SpeakerWaveIcon fill="#1cb0f6" color="#1cb0f6" size={22} />
        {x.map((item, index) => (
          <Text key={index}>
            <Text> </Text>
            <TouchableOpacity>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          </Text>
        ))}
      </Text>
    </View>
  );
};

export default TalkingBallon;
