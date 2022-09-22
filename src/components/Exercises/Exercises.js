import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Color from "../../../assets/Utilites/Color";
import styles from "./Exercises.styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useNavigation } from "@react-navigation/native";

const Exercises = ({ exercise }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ExercisePage")}
      style={styles.innerButton}
    >
      <AnimatedCircularProgress
        size={120}
        width={10}
        fill={exercise.definition.levels}
        rotation={135}
        tintColor={Color.Beak_Upper}
        backgroundColor={Color.Hare}
      >
        {() => (
          <View
            style={{
              ...styles.innerCircle,
              backgroundColor: Color.Feather_Green,
            }}
          >
            <Image
              style={styles.innerLogo}
              source={require("../../../assets/Icons/fruits.png")}
            />
          </View>
        )}
      </AnimatedCircularProgress>
      <Text style={styles.innerText}>{exercise.definition.name}</Text>
    </TouchableOpacity>
  );
};

export default Exercises;
