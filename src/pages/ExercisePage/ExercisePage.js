import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import styles from "./ExercisePage.styles";
import Svg, { Path } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import WordList from "../../components/WordList/WordList";
import * as Progress from "react-native-progress";
import TalkingBallon from "../../components/TalkingBallon/TalkingBallon";
import Footer from "../../components/Footer";
import { useState } from "react";
import Word from "../../components/Word";
import Heart from "../../components/Heart";
import { useEffect } from "react";

const ExercisePage = () => {
  const navigation = useNavigation();
  const [row, setRow] = useState(1);
  const route = useRoute();
  const data = route.params;
  const [questions, setQuestions] = useState(data.questions["q" + row]);

  useEffect(() => {
    let newData = data.questions["q" + row];
    setQuestions(newData);
  }, [row]);

  const checking = () => {
    if (Object.keys(questions).length - 1 > row) {
      setRow(row + 1);
    } else {
      navigation.goBack();
    }
  };

  const progressValue = () => {
    let x = row / (Object.keys(questions).length - 1);
    return x;
  };

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

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <Cross navigation={navigation} />

          <Progress.Bar
            progress={progressValue()}
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

          <TalkingBallon sentence={questions.question} />
        </View>
      </View>

      <WordList _words={questions.words}>
        {questions.words.map((word) => (
          <Word key={word.id} {...word} />
        ))}
      </WordList>

      <Footer correctAnswer={questions.answer} checking={checking} />
    </View>
  );
};

export default ExercisePage;
