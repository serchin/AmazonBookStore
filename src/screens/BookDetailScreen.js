import React, { useState, useEffect, useLayoutEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { Feather } from "@expo/vector-icons";

import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import useBook from "../hooks/useBook";

const BookDetailScreen = (props) => {
  const { id } = props.route.params;
  const [book, error] = useBook(id);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Feather
          name="menu"
          size={30}
          style={{ marginRight: 20 }}
          color="white"
          onPress={() => console.log("...")}
        />
      ),
    });
  }, [props.navigation]);

  const height = useHeaderHeight();

  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа {error}</Text>
    );
  }
  if (!book) {
    return null;
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <Image
        style={{ width: 300, height: 400, alignSelf: "center" }}
        source={{ uri: "https://data.internom.mn/media/images" + book.photo }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
        {book.name}
      </Text>
      <Text style={{ top: 10, marginBottom: 30 }}>{book.content}</Text>
      <View style={{ bottom: 20 }}>
        <Button onPress={() => props.navigation.goBack()} title="Буцах" />
      </View>
    </ScrollView>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({});
