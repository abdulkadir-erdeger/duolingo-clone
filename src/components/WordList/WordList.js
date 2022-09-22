import React, { ReactElement, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSharedValue, runOnUI, runOnJS } from "react-native-reanimated";

const containerWidth = Dimensions.get("window").width - 32 * 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    opacity: 0,
  },
});

const WordList = ({ children }) => {
  const [ready, setReady] = useState(false);
  const offsets = children.map(() => ({
    order: useSharedValue(0),
    width: useSharedValue(0),
    height: useSharedValue(0),
    x: useSharedValue(0),
    y: useSharedValue(0),
    originalX: useSharedValue(0),
    originalY: useSharedValue(0),
  }));
  if (!ready) {
    return (
      <View style={styles.row}>
        {children.map((child, index) => {
          return (
            <View
              key={index}
              onLayout={({
                nativeEvent: {
                  layout: { x, y, width, height },
                },
              }) => {
                const offset = offsets[index];
                offset.order.value = -1;
                offset.width.value = width;
                offset.height.value = height;
                offset.originalX.value = x;
                offset.originalY.value = y;
                runOnUI(() => {
                  "worklet";
                  if (
                    offsets.filter((o) => o.order.value !== -1).length === 0
                  ) {
                    runOnJS(setReady)(true);
                  }
                })();
              }}
            >
              {child}
            </View>
          );
        })}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Lines />
    </View>
  );
};

export default WordList;

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
