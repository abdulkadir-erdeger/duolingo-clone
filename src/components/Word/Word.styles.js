import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    padding: 4,
  },
  container2: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E6E8",
    backgroundColor: "white",
    height: 55 - 8,
  },
  text: {
    fontFamily: "Nunito_Regular",
    fontSize: 19,
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    borderBottomWidth: 3,
    borderColor: "#E8E6E8",
    top: 4,
  },
});
