import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../assets/Utilites/Color";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  controlContainer: {
    position: "absolute",
    width: width,
    height: 150,
    backgroundColor: Color.Eel,
    bottom: -30,
    padding: 20,
  },
  button: {
    backgroundColor: "#59CB01",
    width: "100%",
    height: 45,
    borderRadius: 16,
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Nunito_Bold",
  },
});
