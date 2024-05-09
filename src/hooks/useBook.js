import React, { useState, useEffect } from "react";
import axios from "axios";

export default (bookId) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const loadBook = async () => {
    try {
      const result = await axios.get(
        `http://192.168.1.5:8000/api/v1/books/${bookId}`
      );
      setBook(result.data.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadBook();
  }, []);
  return [book, error];
};
