import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";

import {
  HeaderButtons,
  Item,
  OverflowMenu,
  HiddenItem,
} from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";

import Search from "../components/Search";
import useCategory from "../hooks/useCategory";
import CategoryBookList from "../components/CategoryBookList";
import Spinner from "../components/Spinner";
import MyHeaderButton from "../components/MyHeaderButton";
import AddItem from "./AddItem";

const HomeScreen = ({ navigation }) => {
  const [localSearchText, setLocalSearchSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");
  const [categories, errorMessage, loading] = useCategory();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Цэс"
            iconName="ios-menu"
            onPress={() => alert("search")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, localSearchText]);

  const searchBookFromServer = () => {
    console.log(`Сэрверээс ${localSearchText} утгаар хайж эхэллээ...`);
    setServerSearchText(localSearchText);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <ActivityIndicator size="large" color="#99AAAB" /> */}

      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Search
            value={localSearchText}
            onValueChange={setLocalSearchSearchText}
            onFinishEnter={searchBookFromServer}
          />

          {errorMessage && (
            <Text style={{ marginHorizontal: 20, color: "red" }}>
              {errorMessage}
            </Text>
          )}
          <View>
            <AddItem />
          </View>
          <ScrollView style={{ marginTop: 20 }}>
            {categories.map((category) => (
              <CategoryBookList
                searchLocalValue={localSearchText}
                searchServerValue={serverSearchText}
                key={category._id}
                style={{ marginVertical: 10 }}
                data={category}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
