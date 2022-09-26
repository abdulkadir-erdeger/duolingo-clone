import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./TalkingBallon.styles";
import { SpeakerWaveIcon } from "react-native-heroicons/solid";

const sentence = "The dress is very small .";

const TalkingBallon = () => {
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
