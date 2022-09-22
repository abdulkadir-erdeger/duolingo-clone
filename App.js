import { Image } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ExercisePage from "./src/pages/ExercisePage";

const Stack = createStackNavigator();

import Home from "./src/pages/Home";
import Dialog from "./src/pages/Dialog";
import Profile from "./src/pages/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    Nunito_Black: require("./assets/Fonts/Nunito-Black.ttf"),
    Nunito_Bold: require("./assets/Fonts/Nunito-Bold.ttf"),
    Nunito_ExtraBold: require("./assets/Fonts/Nunito-ExtraBold.ttf"),
    Nunito_Regular: require("./assets/Fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer independent={true}>
      <HomePage />
    </NavigationContainer>
  );
}

function HomePage() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen
        name="ExercisePage"
        component={ExercisePage}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/home-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/home-unactive.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Dialog"
        component={Dialog}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 24 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 24 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/profile-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/profile-unactive.png")}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
