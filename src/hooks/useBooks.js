import { useState, useEffect } from "react";
import axios from "axios";

export default (categoryId, searchText) => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchBook = (searchValue) => {
    console.log(searchValue + "түлхүүр үгээр хайлт эхэллээ...");
  };

  useEffect(() => {
    let limit = 3;
    let search = "";
    if (searchText) {
      limit = 50;
      search = `&search=${searchText}`;
    }
    console.log(
      `http://192.168.1.5:8000/api/v1/categories/${categoryId}/books?limit=${limit}${search}`
    );

    setLoading(true);
    axios

      .get(
        `http://192.168.1.5:8000/api/v1/categories/${categoryId}/books?limit=${limit}${search}`
      )
      .then((result) => {
        console.log("Номнуудыг амжилттай хүлээж авлаа");
        setBooks(result.data.data);
        setErrorMessage(null);
        setLoading(false);
      })

      .catch((err) => {
        // console.log(err.message);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сервер дээр энэ өгөгдөл байхгүй байна...";
        else if (message === "Network Error")
          message =
            "Сервер ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу..";
        setErrorMessage(message);
        setLoading(false);
      });
  }, [categoryId, searchText]);
  return [books, errorMessage, searchBook, loading];
};
