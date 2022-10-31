import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import styles from "./ExercisePage.styles";
import Svg, { Path, Circle } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import WordList from "../../components/WordList/WordList";
import * as Progress from "react-native-progress";
import TalkingBallon from "../../components/TalkingBallon/TalkingBallon";
import Footer from "../../components/Footer";
import { useState } from "react";

const ExercisePage = () => {
  const navigation = useNavigation();
  const [row, setRow] = useState(2);
  const route = useRoute();
  const questions = route.params.questions;
  const w = questions["q" + row].words;

  function checking() {
    if (Object.keys(questions).length > row) {
      setRow(row + 1);
    } else {
      navigation.goBack();
    }
  }

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
          <TalkingBallon sentence={questions["q" + row].question} />
        </View>
      </View>

      <WordList _words={w}>
        {w.map((word) => (
          <Word key={word.id} {...word} />
        ))}
      </WordList>
      <Footer correctAnswer={questions["q" + row].answer} checking={checking} />
    </View>
  );
};

export default ExercisePage;
