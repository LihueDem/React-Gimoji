import { useState, useEffect } from "react";
import axios from "axios";

const urlApi = import.meta.env.VITE_URL_API;

export const reqAxios = axios.create({
  baseURL: urlApi,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
    // 'token': 'kdjsfierwhjerw0893455784598',
  },
});

export const useAxios = (url, method, params) => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFetch();
  }, [url]);

  //El metodo get ya que es llamado por defecto
  const getFetch = async () => {
    const resp = await reqAxios({
      url: url,
      method: method,
      params: { params },
    });
    const { data } = await resp.data;
    setDataApi(data);
    setIsLoading(false);
  };

  return {
    dataApi,
    isLoading,
  };
};

//Declara el method con la peticion que quiere llamar
useAxios.defaultProps = {
  params: null,
  //method:"post"
};

//Las peticiones de Axios siempre son GET por default. Tambien nos permite pasar parametros en forma de objeto
