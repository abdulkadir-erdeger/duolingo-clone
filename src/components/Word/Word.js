import { View, Text } from "react-native";
import React from "react";
import styles from "./Word.styles";

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

export default Word;
