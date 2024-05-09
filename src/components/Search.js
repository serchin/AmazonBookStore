import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

const Search = ({ value, onValueChange, onFinishEnter }) => {
  return (
    <View style={css.searchPanel}>
      <Feather name="search" style={css.searchIcon} color="#535C68" />
      <TextInput
        value={value}
        onChangeText={onValueChange}
        style={css.searchText}
        placeholder="Хайх"
        placeholderTextColor="#DAE0E2"
        autoCorrect={false}
        onEndEditing={onFinishEnter}
      />
    </View>
  );
};

export default Search;

const css = StyleSheet.create({
  searchPanel: {
    backgroundColor: "#99AAAB",
    marginHorizontal: 15,
    borderRadius: 7,
    height: 50,
    top: 15,
    flexDirection: "row",
    alignContent: "center",
  },
  searchText: {
    color: "white",
    fontSize: 18,
    flex: 1,
  },
  searchIcon: {
    fontSize: 34,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
