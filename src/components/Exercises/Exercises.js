import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Color from "../../../assets/Utilites/Color";
import styles from "./Exercises.styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useNavigation } from "@react-navigation/native";

const Exercises = ({ exercise }) => {
  const navigation = useNavigation();
  const url =
    "https://raw.githubusercontent.com/abdulkadir-erdeger/duolingo-clone/master/assets/Icons/" +
    exercise.definition.picture;

  return (
    exercise && (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ExercisePage", (exercise = exercise))
        }
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
                source={{
                  uri: url,
                }}
                resizeMode="cover"
              />
            </View>
          )}
        </AnimatedCircularProgress>
        <Text style={styles.innerText}>{exercise.definition.name}</Text>
      </TouchableOpacity>
    )
  );
};

export default Exercises;
