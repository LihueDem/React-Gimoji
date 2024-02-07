import React, { useState, useEffect } from "react";
import { reqAxiosHook } from "../config/axiosGiphy";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const useAxios = (url, method, params) => {
  const [dataApi, setDataApi] = useState([]);
  const [textSearch, setTextSearch] = useState("animals"); //Custom Select
  const [isLoading, setIsLoading] = useState(true);
  const limit = 16;

  useEffect(() => {
    getFetch();
  }, [url]);

  //Quitamos el metodo get ya que esta llamado por defecto
  const getFetch = async () => {
    const resp = await reqAxiosHook{
      url: url,
      method: method,
      params:{params},
    };
    const { data } = await resp.data;
    setDataApi(data);
    setIsLoading(false);
  };

  return {
    dataApi,
    isLoading
  };
};

useAxios.defaultProps = {
  params: null,
  //method:"post"
}