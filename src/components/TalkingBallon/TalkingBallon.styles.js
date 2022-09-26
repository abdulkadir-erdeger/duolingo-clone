import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dialog: {
    width: "40%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    margin: 10,
  },

  leftPoint: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 1,
    borderBottomWidth: 20,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",
    position: "absolute",
    top: "50%",
    left: "-15%",
    alignItems: "center",
    justifyContent: "center",
  },
  innerLeftPoint: {
    width: 0,
    height: 0,
    borderLeftWidth: 17.5,
    borderRightWidth: 1,
    borderBottomWidth: 17.5,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    top: 10.2,
    left: -8,
  },

  text: {
    fontSize: 18,
    textDecorationStyle: "dotted",
    textDecorationLine: "underline",
    letterSpacing: 0.5,
    justifyContent: "space-around",
    textAlign: "center",
    lineHeight: 30,
  },
});
