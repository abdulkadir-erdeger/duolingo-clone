import { StyleSheet } from "react-native";
import Color from "../../../assets/Utilites/Color";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Snow,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    margin: 10,
  },
  row: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "Nunito_Bold",
    fontSize: 24,
    paddingLeft: 16,
  },
  image: {
    marginStart: 25,
    width: 100,
    height: 150,
  },
  questionCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartText: {
    fontSize: 18,
    color: Color.Cardinal,
    margin: 5,
    fontFamily: "Nunito_ExtraBold",
  },
});
