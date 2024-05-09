import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import PlacesListScreen from "./src/screen/PlacesListScreen";
import NewPlaceScreen from "./src/screen/NewPlaceScreen";
import PlaceDetailScreen from "./src/screen/PlaceDetailScreen";
import MapScreen from "./src/screen/MapScreen";
import { initDb, insertPlace, getPlaces, clearPlaces } from "./src/helpers/db";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initDb()
      .then((result) => {
        (async () => {
          console.log("Өгөгдлүүдийг базд хийх гэж байна...");
          const r1 = await insertPlace(
            "Коффее",
            "file://hello.jpg",
            "хаяг№",
            23.12,
            -33.233
          );
          console.log("Эхний бичлэгийн ID", r1.insertId);
          const r2 = await insertPlace(
            "Бассейн",
            "file://bassein.jpg",
            "хаяг2",
            33.12,
            -22.233
          );
          console.log("Хоёрдахь бичлэгийн ID", r2.insertId);
          const result = await getPlaces();
          console.log("Үр дүн: ", result.rows._array);
          // await clearPlaces();
        })();
        console.log("Базыг бэлтгэж дууслаа...");
      })
      .catch((err) => console.log("Базыг бэлтгэхэд асуудал гарлаа!", err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Places">
        <Stack.Screen name="Places" component={PlacesListScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
