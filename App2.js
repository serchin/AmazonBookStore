import React from "react";
import { Button, View, Text, StyleSheet, Alert } from "react-native";
import { BlurView } from "expo-blur";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HeaderBackButton } from "@react-navigation/elements";

import HomeScreen from "./src/screens/HomeScreen";
import BookDetailScreen from "./src/screens/BookDetailScreen";
import AddItemScreen from "./src/screens/AddItem";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#3498DB" },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 22 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Монгол Тэрбумтан",
          })}
        />
        <Stack.Screen
          name="Detail"
          component={BookDetailScreen}
          options={({ navigation }) => ({
            title: "Амазон номын дэлгүүр",
            headerBackTitleVisible: false,
            headerBackTitle: "Буцах",
            headerTruncatedBackTitle: "",
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  Alert.alert("Анхаар!", "Та үнэхээр буцахыг хүсэж байна уу", [
                    {
                      text: "Болих",
                      onPress: () => console.log("Болих"),
                    },
                    {
                      text: "Буц",
                      onPress: () => navigation.goBack(),
                    },
                  ]);
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
