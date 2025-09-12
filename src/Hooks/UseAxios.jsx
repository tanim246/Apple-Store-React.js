import axios from "axios";
import { useEffect, useState } from "react";

const UseAxios = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fatchData = async (url) => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fatchData(url);
  },[url,data]);
  return {data,loading,error };
};

export default UseAxios;
