import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const thousandify = require("thousandify");

const Book = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { id: data.id })}
      style={{ marginLeft: 15, marginVertical: 15, width: 200 }}
    >
      <Image
        style={{ width: 200, height: 300, marginRight: 15 }}
        source={{
          uri: "https://data.internom.mn/media/images" + data.photo,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          fontSize: 12,
          marginTop: 10,
        }}
      >
        {data.name}
      </Text>
      <Text
        style={{
          marginLeft: 10,
          fontWeight: "bold",
          top: 5,
          fontSize: 10,
        }}
      >
        {data.author}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ marginRight: 10, fontWeight: "bold", fontSize: 18 }}>
          {thousandify(data.price)}₮
        </Text>
        <Text style={{ marginRight: 10, fontSize: 12, color: "gray" }}>
          {data.balance > 0 ? `${data.balance}ш` : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;

const styles = StyleSheet.create({});
