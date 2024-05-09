import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchCategory = () => {
    console.log("Хайлт эхэллээ...");
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://192.168.1.5:8000/api/v1/categories")
      .then((result) => {
        console.log("Үр дүнг амжилттай хүлээж авлаа");
        setCategories(result.data.data);
        setErrorMessage(null);
        setLoading(false);
      })

      .catch((err) => {
        setLoading(false);
        // console.log(err.message);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сервер дээр энэ өгөгдөл байхгүй байна...";
        else if (message === "Network Error")
          message =
            "Сервер ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу..";
        setErrorMessage(message);
      });
  }, []);
  return [categories, errorMessage, loading];
};
