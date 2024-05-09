import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Book from "./Book";
import useBooks from "../hooks/useBooks";
import Spinner from "./Spinner";

const CategoryBookList = ({
  data,
  style,
  searchLocalValue,
  searchServerValue,
}) => {
  const [books, errorMessage, searchBook, loading] = useBooks(
    data._id,
    searchServerValue
  );

  console.log("Шүүгдсэн номууд");
  const filteredBooks = books.filter((el) =>
    el.name.toLowerCase().includes(searchLocalValue.toLowerCase())
  );
  return (
    <View style={{ ...style }}>
      <Text
        style={{
          marginLeft: 15,
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 20,
        }}
      >
        {data.name} - {filteredBooks.length}
      </Text>
      <Text style={{ marginLeft: 15 }}>{data.description}</Text>
      {/* {books.map((book) => (
        <Text key={book.name}>{book.name}</Text>
      ))} */}
      {loading && <Spinner showText={false} />}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredBooks}
        keyExtractor={(book) => book.name}
        renderItem={({ item, index }) => <Book data={item} />}
      />
    </View>
  );
};

export default CategoryBookList;

const styles = StyleSheet.create({});
