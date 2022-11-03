import { View, StyleSheet } from "react-native";

const Lines = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      {new Array(3).fill(0).map((_, index) => (
        <View
          key={index * 55}
          style={{
            top: index * 55 - 2,
            width: "100%",
            height: 2,
            backgroundColor: "#E6E5E6",
          }}
        />
      ))}
    </View>
  );
};

export default Lines;
