import React, { useState, useEffect } from "react";
import { reqAxios } from "../config/axiosGiphy";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const useAxios = (url) => {
  const [dataApi, setDataApi] = useState([]);
  const [textSearch, setTextSearch] = useState("animals"); //Custom Select
  const limit = 16;

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    const resp = await reqAxios.get(url);
    const { data } = await resp.data;
    setDataApi(data);
  };

  return {
    dataApi,
  };
};
